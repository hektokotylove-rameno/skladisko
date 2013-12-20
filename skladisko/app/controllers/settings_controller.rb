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
      session[:message] = 'Error Occured While Loading Database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  def save_database
    if system "rake db:data:dump"
      session[:message] = 'Database saved successfully!'
    else
      session[:message] = 'Error Occured While Saving Database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  
  def force_check_expired_chems
<<<<<<< HEAD
    Message.create_expired_messages
    #if system "/usr/bin/wget localhost:3000/messages/check_expired"
      session[:message] = 'Expiration dates checked succesfully!'
    #else
      #session[:message] = 'Error occured while checking expiration dates'
      #session[:type] = 'error'
    #end
=======
    if system "wget localhost:3000/messages/check_expired"
      session[:message] = 'Expiration Dates Checked Succesfully!'
    else
      session[:message] = 'Error Occured While Checking Expiration Dates'
      session[:type] = 'error'
    end
>>>>>>> b468e650c4ea7f46a739c746a1cbd0eb75702a33
    redirect_to settings_path
  end
  
  def save_settings
    @setting = Setting.find(1)
    @setting.days_before_warn = params[:setting][:days_before_warn]
    if(@setting.save)
      session[:message] = 'Settings Saved'
      redirect_to settings_path
    else
      session[:type] = 'Error'
      session[:message] = 'Must Be a Number'
      redirect_to settings_path
    end
  end
  
  def dump
    session[:message] = 'Database Saved Successfully'
    redirect_to settings_path
  end
  
end
