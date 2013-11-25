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
  
  def show
  end
  
  def get_chem_id
    params[:containers].require(:chemical_id)
  end
  
  def container_params
    params[:containers].permit(:chemical_id, :amount, :expiration_date, :catalog_number, :location)
  end
  
  def operation_params
    params[:operation].permit(:kind, :project_id, :note)
  end
  
end
