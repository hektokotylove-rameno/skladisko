class SettingsController < ApplicationController
  def index
    @setting = Setting.find(1)
    render 'index'
    session[:message] = nil
    session[:type] = nil
  end
  
  def save
    if (params[:save])
      save_database
    end
    if (params[:load])
      if system "/usr/local/bin/rake db:data:load"
        session[:message] = 'Database loaded successfully!'
      else
        session[:message] = 'Error occured while loading database'
        session[:type] = 'error'
      end
      redirect_to settings_path
    end
    if (params[:settings])
      save_settings
    end
  end
  
  def save_database
    if system "/usr/local/bin/rake db:data:dump"
      session[:message] = 'Database saved successfully!'
    else
      session[:message] = 'Error occured while saving database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  def save_settings
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
  
  def dump
    session[:message] = 'Database saved successfully'
    redirect_to settings_path
  end
  
end