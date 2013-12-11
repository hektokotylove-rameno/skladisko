class ChemicalsController < ApplicationController
  def index
    @chemicals = Chemical.all
  end
  
  def show
    @chemical = Chemical.find(params[:id])
  end
  
  def new
    @chemical = Chemical.new
  end
  
  def create
    @chemical = Chemical.new(chem_params)
    if @chemical.save
      redirect_to @chemical
    else
      render :new
    end
  end
  
  def edit
    @chemical = Chemical.find(params[:id])
  end
  
  def update
    @chemical = Chemical.find(params[:id])
    if @chemical.update(chem_params)
      redirect_to @chemical
    else
      render :edit
    end
  end
  
  def chem_params
    params[:chemical].permit(:name, :unit, :critical_amount, :group, :note)
  end
end
