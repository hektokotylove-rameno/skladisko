class SettingsController < ApplicationController
  def index
    @setting = Setting.find(1)
    render 'index'
    session[:message] = nil
    
  end
  
  def save
    @setting = Setting.find(1)
    @setting.days_before_warn = params[:setting][:days_before_warn]
    if(@setting.save)
      session[:message] = 'Settings saved'
      redirect_to settings_path
    else
      session[:type] = 'Error'
      session[:message] = 'Must be a number'
      redirect_to settings_path
    end
  end
  
end
