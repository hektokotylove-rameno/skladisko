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
  
  def index
    @users = User.all
  end
  
  def user_params
    params.require(:user).permit(:username, :password)
  end
  
  def login
    render 'login'
  end
  
  def check_login
    user_data = params[:user]
    @user = User.find_by_username(user_data[:username])
    if @user && @user.password_hash == BCrypt::Engine.hash_secret(user_data[:password], @user.password_salt)
      session[:id] = @user.id;
      render text: session[:id]
    else
      @error = true;
      render 'login'
    end
  end
  
  def logout
    session[:id] = nil
    render 'login'
  end
end
