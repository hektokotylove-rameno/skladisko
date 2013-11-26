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
    @chemical = Chemical.new(params[:chemical].permit(:name, :unit, :group, :note))
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
    if @chemical.update(params[:chemical].permit(:name, :unit, :group, :note))
      redirect_to @chemical
    else
      render :edit
    end
  end
end
