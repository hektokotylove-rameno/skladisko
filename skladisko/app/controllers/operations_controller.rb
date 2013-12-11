class OperationsController < ApplicationController
  
  def show
    @operation = Operation.find(params[:id])
  end
  
  def new
    @operation = Operation.new
    @operation.containers.build
    if (params[:kind] == 'add')
      render 'new'
    end
    if (params[:kind] == 'retract')
      @operation.kind = 2
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
  end
  
  def operation_kind
    params[:operation].require(:kind)
  end
  
  def do_add
    prepare_variables
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
      cont = Container.new(permit_container_params(container))
      cont.real = true
      containers += [cont]
      cont_fake = Container.new(permit_container_params(container))
      cont_fake.real = false
      containers_fake += [cont_fake]
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
    @operation.project = @project
    if (params[:save])
      @operation.protocol = true
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
      chemical = Chemical.find(container[:chemical_id])
      amount = container[:amount].to_f
      if chemical.total_amount < amount
        enough = false
        break
      end
    end
    if enough
      @containers_fake = []
      container_attributes.each do |key,cont|
        chemical = Chemical.find(cont[:chemical_id])
        remaining_amount = cont[:amount].to_f
        chemical.total_amount -= remaining_amount
        while (remaining_amount > 0)
          container = Container.find_by_chemical_id_and_real(chemical.id, true)
          if container.amount > remaining_amount
            container.amount -= remaining_amount
            remaining_amount = 0
            container.save
          else
            remaining_amount -= container.amount
            container.delete
          end
        end
        container_fake = Container.new
        container_fake.chemical = chemical
        container_fake.amount = cont[:amount].to_f
        container_fake.real = false
        @containers_fake += [container_fake]
        chemical.save
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
      @operation.save
      redirect_to "/operations"
    else
      render text: 'Nedostatocne mnozstvo'
    end
  end
  
  def create_retract_operation
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.project = @project 
    @operation.containers += @containers_fake
    if (params[:save])
      @operation.protocol = true
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
      chemical.total_amount += container.amount
      chemical.containers += [container]
      chemical.save
    end
  end
  
  def change_total_amount
    @chemical = Chemical.find(get_chem_id)
    @chemical.total_amount  += @container.amount
    @chemical.containers.push(@container)
  end
    
  def index
    user = ""
    project = ""
    if not (params[:user].nil? or (params[:user] == ""))
      user = params[:user]
    end
    if not (params[:project].nil? or params[:project] == "")
      project = params[:project]
    end
    #if conditions.empty?
    #  @operations = Operation.all
    #else
    @operations = Operation.joins(:user, :project).where("users.name LIKE ? AND projects.name LIKE ?", "%#{user}%", "%#{project}%");
    #end
    respond_to do |format|
      format.html
      format.js {}
      format.json {}
    end
  end
  
  def index_protocols
    @operations = Operation.find_all_by_protocol(true)
    @protocols_only = true
    render :index
  end
  
  def edit
    #render text: params
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
    params[:project_name]
  end
  
  def container_params
    params[:container].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def permit_container_params(args)
    ActionController::Parameters.new(args).permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def operation_params
    params[:operation].permit(:kind, :project_id, :note)
  end
  
end
