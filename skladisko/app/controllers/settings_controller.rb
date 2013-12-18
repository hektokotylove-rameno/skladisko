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
      if File.exists?('./db/data.yml')
        
      end
      
    end
    if (params[:settings])
      save_settings
    end
  end
  
  def save_database
    system "/usr/local/bin/rake db:data:dump >> ./logs/db_dump.txt"
    if File.exists?('./logs/db_dump.txt')
      session[:message] = 'Error occured while saving database'
      session[:type] = 'error'
      File.delete('./logs/db_dump.txt')
    else
      session[:message] = 'Database saved'
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
