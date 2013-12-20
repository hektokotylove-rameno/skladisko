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
      load_database
    end
    if (params[:load])
      drop_and_load
    end
    if (params[:settings])
      save_settings
    end
    if (params[:check])
      force_check_expired_chems
    end
  end
  
  def drop_and_load
    if system "rake db:data:load"
      if system "rake db:drop && rake db:data:load"
        session[:message] = 'Database restored successfully!'
      else
        session[:message] = 'Error occured while restoring database'
        session[:type] = 'error'
      end
      session[:message] = 'Database backup corrupted, please backup again'
      session[:type] = 'error'
    end
    
  end
  
  def load_database
    if system "rake db:data:load"
      session[:message] = 'Database loaded successfully!'
    else
      session[:message] = 'Error occured while loading database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  def save_database
    if system "rake db:data:dump"
      session[:message] = 'Database saved successfully!'
    else
      session[:message] = 'Error occured while saving database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  
  def force_check_expired_chems
    Message.create_expired_messages
    #if system "/usr/bin/wget localhost:3000/messages/check_expired"
      session[:message] = 'Expiration dates checked succesfully!'
    #else
      #session[:message] = 'Error occured while checking expiration dates'
      #session[:type] = 'error'
    #end
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
