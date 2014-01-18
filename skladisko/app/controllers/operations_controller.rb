class OperationsController < ApplicationController
  
  skip_before_action :require_admin, only: [:show, :index, :options_projects, :options_chemicals, :options_users, :new,
                                            :create, :index, :index_protocols, :edit, :add_from_protocol]
  
  def show
    @operation = Operation.find(params[:id])
    @participants = [];
    @operation.participants.each do |part| 
      @participants += [part.name]
    end
    @participants = @participants.join(',')
  end
  
  def new
    session[:message] = nil
    @chemical = Chemical.new
    @operation = Operation.new
    @operation.containers.build
    if (params[:kind] == 'add')
      render 'new'
    end
    if (params[:kind] == 'retract')
      @operation.kind = 2
      render 'new'
    end
    if (params[:kind] == 'modify')
      @operation.kind = 3
      render 'new'
    end
  end
  
  def options_projects
    projects = Project.all
    @options = []
    projects.each do |project|
      @options.push(project.name)
    end
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    #format.html { redirect_to @current_user, notice: 'User was successfully created.' }
    #format.js   {@options.reverse}
    render json: @options.reverse
  end
  
  def options_chemicals
    chemicals = Chemical.all
    @options = []
    chemicals.each do |chemical|
      @options.push(chemical.name)
    end
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    #format.html { redirect_to @current_user, notice: 'User was successfully created.' }
    #format.js   {@options.reverse}
    render json: @options
  end
  
  def options_users
    users = User.all
    @options = []
    users.each do |user|
      @options.push(user.name)
    end
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    #format.html { redirect_to @current_user, notice: 'User was successfully created.' }
    #format.js   {@options.reverse}
    render json: @options
  end
  
  def options_protocols
    operations = Operation.where({protocol: true})
    @options = []
    operations.each do |operation|
      @options.push(operation.name)
    end
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Pragma"] = "no-cache"
    response.headers["Expires"] = "0"
    #format.html { redirect_to @current_user, notice: 'User was successfully created.' }
    #format.js   {@options.reverse}
    render json: @options
  end
  
  def create
    #render text: params
    choose_operation
  end
  
  def choose_operation
    if (operation_kind == '1')
      do_add
    end
    if (operation_kind == '2')
      do_retract
    end
    if (operation_kind == '3')
      do_retract
    end
  end
  
  def operation_kind
    params[:operation].require(:kind)
  end
  
  def do_add
    prepare_variables
    p @operation
    if (@operation.save)
      #@chemical.save
      redirect_to chemicals_path
    else
      render 'new'
    end
  end
  
  def prepare_variables
    containers = []
    containers_fake = []
    container_attributes = params[:operation][:containers_attributes]
    container_attributes.each do |key,container|
      if (container["_destroy"] == "false")
        chemical_data = container["chemical"]
        chemical = nil
        chemical = Chemical.find_by_name(container["chemical_name"])
        if chemical.nil? and not ((chemical_data["unit"] == "") || (chemical_data["critical_amount"] == "") && (chemical_data["note"] == "") && (chemical_data["group"] == ""))
          group = Group.find_or_create_by_name(chemical_data["group"])
          group.save
          chemical = Chemical.new()
          chemical.name = container["chemical_name"]
          chemical.unit = chemical_data["unit"]
          chemical.critical_amount = chemical_data["critical_amount"]
          chemical.group = group
          chemical.note = chemical_data["note"]
          chemical.save
        end
        
        cont = Container.new(permit_container_params(container))
        cont.chemical = chemical
        cont.real = true
        containers += [cont]
        cont_fake = Container.new(permit_container_params(container))
        cont_fake.chemical = chemical
        cont_fake.real = false
        containers_fake += [cont_fake]
      end
    end
    #@container = Container.new(container_params)
    #@container.real = true
    #@container_op = Container.new(container_params)
    #@container_op.real = false
    @project = Project.find_or_create_by_name(get_project_name)
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    #@operation.containers.push(@container_op)
    @operation.containers += containers_fake
    participants_attributes = params[:operation][:participants_attributes]
    participants = []
    if not participants_attributes.nil?
      participants_attributes.each do |key,partic|
        if (partic["_destroy" ] == "false")
          participant = User.find_by_name(partic["name"])
          participants += [participant]
        end
      end
    end
    @operation.participants = participants
    @operation.project = @project
    if (params[:is_protocol])
      @operation.protocol = true
      @operation.name = params[:operation][:name]
    end
    #change_total_amount
    update_chemical_amounts(containers)
  end
  
  def do_retract
    @chemicals = []
    container_attributes = params[:operation][:containers_attributes]
    #@chemical = Chemical.find(get_chem_id)
    enough = true
    container_attributes.each do |key,container|
      if (container["_destroy"] == "false")
        chemical = Chemical.find_by_name(container[:chemical_name])
        amount = container[:amount].to_f
        if (params[:operation][:kind] == "3")
          amount = -amount
        end
        
        if chemical.total_amount < amount
          enough = false
          break
        end
      end
    end
    if enough
      @containers_fake = []
      container_attributes.each do |key,cont|
        if (cont["_destroy"] == "false")
          chemical = Chemical.find_by_name(cont[:chemical_name])
          remaining_amount = cont[:amount].to_f
          if (params[:operation][:kind] == "3")
            remaining_amount = -remaining_amount
          end
          chemical.total_amount -= remaining_amount
          if (params[:operation][:kind] == "2")
            while (remaining_amount > 0)
              container = Container.find_by_chemical_id_and_real(chemical.id, true, :order => :expiration_date)
              if container.amount > remaining_amount
                container.amount -= remaining_amount
                remaining_amount = 0
                container.save
              else
                remaining_amount -= container.amount
                container.remove_obsolete_messages
                container.delete
              end
            end
          end
          container_fake = Container.new
          container_fake.chemical = chemical
          container_fake.expiration_date = DateTime.now
          container_fake.amount = cont[:amount].to_f
          container_fake.real = false
          @containers_fake += [container_fake]
          chemical.save
        end
      end
      #@chemical.total_amount -= params_amount
      #am = params_amount
      #while (am > 0)
      #  container = Container.find_by_chemical_id_and_real(@chemical.id, true)
      #  if container.amount > am
      #    container.amount -= am
      #    am = 0
      #    container.save
      #  else
      #    am -= container.amount
      #    container.delete
      #  end
      #end
      @project = Project.find_or_create_by_name(get_project_name)
      #create_retract_container
      create_retract_operation
      
      #@chemical.save
      p @operation
      if @operation.save
        p "JUHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU***********************************"
      else
        p "HOVNOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO**************************"
        p @operation.participants.to_json
        p @operation.errors.full_messages.to_json
      end
      redirect_to "/operations"
    else
      session[:message] = "Chemical amount is not sufficient"
      @operation = Operation.new
      @operation.kind = params[:operation][:kind]
      @operation.containers.build
      render 'new'
    end
  end
  
  def create_retract_operation
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.project = @project 
    @operation.containers += @containers_fake
    participants_attributes = params[:operation][:participants_attributes]
    participants = []
    if not participants_attributes.nil?
      participants_attributes.each do |key,partic|
        if (partic["_destroy" ] == "false")
          participant = User.find_by_name(partic["name"])
          participants += [participant]
        end
      end
    end
    @operation.participants = participants
    if (params[:is_protocol])
      @operation.protocol = true
      @operation.name = params[:operation][:name]
    end
  end
  
  def create_retract_container
    @container_op = Container.new(container_params)
    @container_op.real = false
  end
  
  def params_amount
    params[:container].require(:amount).to_f
  end
  
  def update_chemical_amounts(containers)
    containers.each do |container|
      chemical = Chemical.find(container.chemical_id)
      if (container)
        chemical.total_amount += container.amount
        chemical.containers += [container]
        chemical.save
      end
    end
  end
  
  def change_total_amount
    @chemical = Chemical.find(get_chem_id)
    @chemical.total_amount  += @container.amount
    @chemical.containers.push(@container)
  end
    
  def index
    if params[:protocols]
      @protocols_only = true
    end
    
    user = ""
    project = ""
    kinds = []
    chemical = ""
    protocol_name = ""
    from_date = DateTime.new
    til_date = DateTime.now
    if not (params[:user].nil? or (params[:user] == ""))
      user = params[:user]
    end
    if not (params[:kind_1].nil?)
      kinds += [1]
    end
    if not (params[:kind_2].nil?)
      kinds += [2]
    end
    if not (params[:kind_3].nil?)
      kinds += [3]
    end
    if not (params[:project].nil? or params[:project] == "")
      project = params[:project]
    end
    if not (params[:chemical].nil? or params[:chemical] == "")
      chemical = params[:chemical]
    end
    if not (params[:protocol_name].nil? or params[:protocol_name] == "")
      protocol_name = params[:protocol_name]
    end
    #if conditions.empty?
    #  @operations = Operation.all
    #else
    if kinds.empty?
      kinds = [1, 2, 3]
    end
    
    if (chemical == "")
      if (user == "")
        @ops = Operation.joins(:user, :project).where("users.name LIKE ? AND projects.name LIKE ? AND kind IN (?)", "%#{user}%", "%#{project}%", kinds)
      else
        @ops = Operation.joins(:project).joins("INNER JOIN 'users' AS 'owner' ON 'owner'.'id' = 'operations'.'user_id' LEFT OUTER JOIN 'operations_users' ON 'operations_users'.'operation_id' = 'operations'.'id' LEFT OUTER JOIN 'users' AS 'participants_operations' ON 'participants_operations'.'id' = 'operations_users'.'user_id'").where("(('owner'.'name' LIKE ?) OR ('participants_operations'.'name' LIKE ?)) AND 'projects'.'name' LIKE ? AND 'operations'.'kind' IN (?)", "%#{user}%", "%#{user}%", "%#{project}%", kinds)
      end
      if @protocols_only
        @ops = @ops.where({:protocol => true}).where("operations.name LIKE ?", "%#{protocol_name}%")
      end
    else
      @ops = Operation.joins(:user, :project, containers: [:chemical]).where("users.name LIKE ? AND projects.name LIKE ? AND kind IN (?) AND chemicals.name LIKE ?", "%#{user}%", "%#{project}%", kinds, "%#{chemical}%").reverse_order
      if @protocols_only
        @ops = @ops.where({:protocol => true}).where("operations.name LIKE ?", "%#{protocol_name}%")
      end
      
    end
    #@ops = @ops.where("('operations'.'date' >= ?) AND ('operations'.'date' <= ?)", from_date, til_date)
    #@ops = @ops.where("(date >= ?)", from_date)
    ids = []
    @operations = []
    @ops.each do |op|
      if not ids.include? op.id
        ids += [op.id]
        @operations += [op]
      end
    end
    #end
    respond_to do |format|
      format.html
      format.js {}
      format.json {}
    end
  end
  
  def edit
    #render text: params
    @chemical = Chemical.new
    @operation = Operation.find(params[:id])
  end
  
  def add_from_protocol
    #render json: params
    choose_operation
  end
  
  def get_chem_id
    params[:container].require(:chemical_id)
  end
  
  def get_project_name
    params[:operation].require(:project_name)
  end
  
  def container_params
    params[:container].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def permit_container_params(args)
    ActionController::Parameters.new(args).permit(:amount, :expiration_date, :expirable, :catalog_number, :location)
  end
  
  def operation_params
    params[:operation].permit(:kind, :note, :name)
  end
  
end
