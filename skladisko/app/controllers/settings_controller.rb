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
    if (params[:settings])
      save_settings
    end
    if (params[:check])
      force_check_expired_chems
    end
  end
  
  def load_database
    if system "/home/andrej/.rvm/gems/ruby-2.0.0-p247@global/bin/rake db:data:load"
      session[:message] = 'Database Loaded Successfully!'
    else
      session[:message] = 'Error Occured While Loading Database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  def save_database
    if system "/home/andrej/.rvm/gems/ruby-2.0.0-p247@global/bin/rake db:data:dump"
      session[:message] = 'Database saved successfully!'
    else
      session[:message] = 'Error Occured While Saving Database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  
  def force_check_expired_chems
    if system "wget localhost:3000/messages/check_expired"
      session[:message] = 'Expiration Dates Checked Succesfully!'
    else
      session[:message] = 'Error Occured While Checking Expiration Dates'
      session[:type] = 'error'
    end
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
