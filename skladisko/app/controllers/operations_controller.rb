class OperationsController < ApplicationController
  def new
    @operation = Operation.new
  end

  def create
    @container = Container.new(container_params)
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.containers.push(@container)
    
    change_total_amount
    
    if (params[:save])
      @operation.protocol = true
    end
    if (@operation.save)
      @chemical.save
      redirect_to chemicals_path
    else
      render 'new'
    end
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
  end
  
  def show
  end
  
  def edit
    
    @operation = Operation.find(params[:id])
  end
  
  def add_from_protocol
    @container = Container.new(container_params)
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.containers.push(@container)
    
    container_params = params[:container]
    @chemical = Chemical.find(container_params[:chemical_id])
    @chemical.total_amount  += @container.amount
    @chemical.containers.push(@container)
    
    if (@operation.save)
      @chemical.save
      redirect_to chemicals_path
    else
      render 'new'
    end
    #if (@opreation.save)
    #  redirect_to chemicals_path
    #else
    #  render 'edit'
    #end
  end
  
  def get_chem_id
    params[:container].require(:chemical_id)
  end
  
  def containers_params
    params[:containers].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def container_params
    params[:container].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def operation_params
    params[:operation].permit(:kind, :project_id, :note)
  end
  
end
