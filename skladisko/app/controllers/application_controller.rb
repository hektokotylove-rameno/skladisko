class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :require_login, :actual_controller, :require_admin
  
  def logged_in?
    if session[:id]
      begin
        @current_user = User.find(session[:id])
      rescue
        return false
      end
      return @current_user
    end
    return false
  end
  
  def require_login
    unless logged_in?
      flash[:error] = "You must be logged in to access this section"
      redirect_to login_path # halts request cycle
    end
  end
  
  def require_admin
    unless is_admin?
      redirect_to login_path
    end
  end
    
  def is_admin?
    if session[:id]
      begin
        user = User.find(session[:id])
        return user.admin
      rescue
        return false
      end
    end
  end

  def actual_controller
    @controller = params["controller"]  
    @current_username =  logged_in?;
  end
  
end
