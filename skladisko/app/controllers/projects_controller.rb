class ProjectsController < ApplicationController
  def index
    @projects = Project.all
  end
  
  def create
    @project = Project.new(project_params)
    if (@project.save)
      redirect_to projects_path
    else
      render 'new'
    end
  end
  
  def new
    @project = Project.new
  end
  
  def project_params
    params[:project].permit(:name)
  end
end
