class UsersController < ApplicationController
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
    if is_logged?
      @users = User.all
    else
      redirect_to login_path
    end
  end
  
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :name)
  end
  
  
end
