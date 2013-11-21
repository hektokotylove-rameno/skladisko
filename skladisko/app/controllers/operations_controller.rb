class OperationsController < ApplicationController
  def new
    @operation = Operation.new
  end

  def create
    @container = Container.new(container_params)
    @operation = Operation.new(operation_params)
    @operation.user = @current_user
    @operation.containers += @container
    if (@operation.save)
      redirect_to chemicals_path
    else
      render 'new'
    end
    #render text: params
  end

  def index
  end

  def show
  end
  
  def container_params
    params[:containers].permit(:chemical_id, :amount, :expiration_date, :catalog_number)
  end
  
  def operation_params
    params[:operation].permit(:kind, :project_id, :note)
  end
  
end
