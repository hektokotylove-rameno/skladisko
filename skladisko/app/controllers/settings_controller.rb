class SettingsController < ApplicationController
  
  def index
    @setting = Setting.find(1)
    render 'index'
    session[:message] = nil
    session[:type] = nil
  end
  
  def select_file
    @restore_data = RestoreData.new
  end
  
  def restore
    @restore_data = RestoreData.new(restore_data_params)
    if (@restore_data.save)
      system ("cp public" + @restore_data.attachment_url + " ./db/data.yml");
      system ("rm -r public/uploads/restore_data/attachment/*")
      load_database
    else
      render 'select_file'
    end
  end
  
  def save
    if (params[:save])
      save_database
    end
    if (params[:restore])
      restore
    end
    if (params[:settings])
      save_settings
    end
    if (params[:check])
      force_check_expired_chems
    end
  end
  
  def load_database
    if (system("bundle exec rake db:data:load"))
      Chemical.delete_all
      Container.delete_all
      Group.delete_all
      Location.delete_all
      Message.delete_all
      Operation.delete_all
      Project.delete_all
      RestoreData.delete_all
      Setting.delete_all
      User.delete_all
      response = system 'bundle exec rake db:data:load'
      if response
        session[:message] = 'Database Loaded Successfully!'
      else
        session[:message] = 'Error Occured While Loading Database'
        session[:type] = 'error'
      end
    else
      session[:message] = 'Error Occured While Loading Database'
      session[:type] = 'error'
    end
    redirect_to settings_path
  end
  
  def save_database
    if system "bundle exec rake db:data:dump"
      send_file 'db/data.yml'
    else
      session[:message] = 'Error Occured While Saving Database'
      session[:type] = 'error'
      redirect_to settings_path
    end
  end
  
  def force_check_expired_chems
    Message.create_expired_messages
    session[:message] = 'Expiration Dates Checked Succesfully!'
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
  
  def restore_data_params
    params.require(:restore_data).permit(:name, :attachment)
  end
  
end
