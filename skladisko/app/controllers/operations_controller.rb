class OperationsController < ApplicationController
  def new
    @operation = Operation.new
    if (params[:kind] == 'add')
      render 'new'
    end
    if (params[:kind] == 'retract')
      render 'retract'
    end
  end
  
  def create
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
      @chemical.save
      redirect_to chemicals_path
    else
      render 'new'
    end
  end
  
  def prepare_variables
    @container = Container.new(container_params)
    @container.real = true
    @container_op = Container.new(container_params)
    @container_op.real = false
    @project = Project.find(get_project_id)
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.containers.push(@container)
    @operation.project = @project
    if (params[:save])
      @operation.protocol = true
    end
    change_total_amount
  end
  
  def do_retract
    @chemical = Chemical.find(get_chem_id)
    if @chemical.total_amount >= params_amount
      @chemical.total_amount -= params_amount
      am = params_amount
      while (am > 0)
        container = Container.find_by_real(true, :order => 'expiration_date')
        if container.amount > am
          container.amount -= am
          am = 0
          container.save
        else
          container.delete
          am -= container.amount
        end
      end
      @project = Project.find(get_project_id)
      create_retract_container(container)
      create_retract_operation
      @chemical.save
      @operation.save
      redirect_to @chemical
    else
      render text: 'Nedostatocne mnozstvo'
    end
  end
  
  def create_retract_operation
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.project = @project 
    @operation.containers.push(@container_op)
    if (params[:protocol])
      @operation.protocol = true
    end
  end
  
  def create_retract_container(c)
    @container_op = Container.new(container_params)
    @container_op.real = false
  end
  
  def params_amount
    params[:container].require(:amount).to_f
  end
  
  def change_total_amount
    @chemical = Chemical.find(get_chem_id)
    @chemical.total_amount  += @container.amount
    @chemical.containers.push(@container)
  end
    
  def index
    @operations = Operation.all;
  end
  
  def index_protocols
    @operations = Operation.find_all_by_protocol(true)
    @protocols_only = true
    render :index
  end
  
  def show
  end
  
  def edit
    @operation = Operation.find(params[:id])
  end
  
  def add_from_protocol
    choose_operation
  end
  
  def get_chem_id
    params[:container].require(:chemical_id)
  end
  
  def get_project_id
    params[:operation].require(:project_id)
  end
  
  def container_params
    params[:container].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def operation_params
    params[:operation].permit(:kind, :project_id, :note)
  end
  
end
