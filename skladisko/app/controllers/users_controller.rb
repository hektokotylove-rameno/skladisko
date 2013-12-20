class UsersController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  skip_before_action :require_admin, only: [:index, :show, :change_password, :update]
  
  ####treba vymazat potom####
  skip_before_action :require_admin, only: [:new, :create]
  ########
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
  
  def edit
    @user = User.find_by_id(params[:id])
    if (@user.id == @current_user.id || @current_user.admin)
      render 'edit'
    else
      render text: 'Nemozno upravit ineho'
    end
  end
  
  def change_password
    @user = User.find(params[:id])
    if (@user.id == @current_user.id || @current_user.admin)
      render 'change'
    else
      render text: 'Nemozno upravit ineho'
    end
  end
  
  def update
    @user = User.find_by_id(params[:id])
    if can_edit
      if @current_user.admin || check_password
        if (@user.update(user_params))
          redirect_to @user
        else
          render 'edit'
        end
      else
        @user.errors.add(:old_password, 'does not match');
        render 'edit'
      end
    else
      render text: 'Nemozno upravit ineho'
    end
  end
  
  def can_edit
    return @user.id == session[:id] || @current_user.admin
  end
  
  def check_password
    user_data = params[:user]
    return @user.password_hash == BCrypt::Engine.hash_secret(user_data[:old_password], @user.password_salt)
  end
  
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, :name)
  end
  
  
end
