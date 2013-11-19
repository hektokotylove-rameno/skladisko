class UsersController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if (@user.save)
      redirect_to @user
    else
      render 'new'
    end
  end
  
  def show
    @user = User.find_by_id(params[:id])
  end
  
  def who
    render text: 'ID of logged user: ' + session[:id].to_s
  end
  
  def index
    @users = User.all
  end
  
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :name)
  end
  
  
end
