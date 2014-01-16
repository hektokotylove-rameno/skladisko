class ChemicalsController < ApplicationController
  
  skip_before_action :require_admin, only: [:index, :show, :new, :create]
  
  def index
    @chemicals = Chemical.all
  end
  
  def show
    @chemical = Chemical.find(params[:id])
  end
  
  def new
    @chemical = Chemical.new
  end
  
  def get_unit
    chemical = Chemical.find_by_name(params[:name])
    if (chemical)
      render text: 'remaining: ' + chemical.total_amount.to_s + chemical.unit
    else
      render text: '';
    end
  end
  
  def create
    @chemical = Chemical.new(chem_params)
    @group = Group.find_or_create_by_name(params[:group_name])
    @chemical.group = @group
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
    @group = Group.find_or_create_by_name(params[:group_name])
    @chemical.group = @group
    if @chemical.update(chem_params)
      redirect_to @chemical
    else
      render :edit
    end
  end
  
  def chem_params
    params[:chemical].permit(:name, :unit, :critical_amount, :note)
  end
end
