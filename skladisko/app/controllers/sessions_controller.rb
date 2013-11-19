class SessionsController < ApplicationController
  def login
    render 'login'
  end
  
  def check_login
    user_data = params[:user]
    @user = User.find_by_username(user_data[:username])
    if @user && @user.password_hash == BCrypt::Engine.hash_secret(user_data[:password], @user.password_salt)
      session[:id] = @user.id;
      redirect_to users_path
    else
      @error = 'Wrong username or password';
      render 'login'
    end
  end
  
  def logout
    session[:id] = nil
    render 'login'
  end
end
