class MessagesController < ApplicationController
  skip_before_action :require_login, :require_admin, only: [:check_expired, :index]
  
  def index
    @messages = Message.all
    @current_user.new_message = false
    @current_user.save
  end
  
  
  def check_expired
    Message.create_expired_messages
    render text: "checked\n"
  end
  
  def get_days_before
    setting = Setting.find(1)
    return setting.days_before_warn
  end
  
end
