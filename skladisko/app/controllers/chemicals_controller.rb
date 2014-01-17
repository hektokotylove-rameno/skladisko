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
  
  def get_units
    chemicals = Chemical.all
    response = [];
    chemicals.each do |chemical|
      response.push(get_name_and_unit(chemical))
    end
    render json: response
  end
  
  def get_name_and_unit(chemical)
    hash = JSON.parse(chemical.to_json)
    hash.delete("id")
    hash.delete("total_amount")
    hash.delete("critical_amount")
    hash.delete("note")
    hash.delete("group_id")
    hash.delete("created_at")
    hash.delete("updated_at")
    return hash
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
