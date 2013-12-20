class MessagesController < ApplicationController
  skip_before_action :require_login, :require_admin, only: [:check_expired, :index]
  
  def index
    @messages = Message.all
    @current_user.new_message = false
    @current_user.save
  end
  
  
  def check_expired
    #days_before = get_days_before
    #warn_date = DateTime.now + days_before
    #containers = Container.where('real = ? AND expiration_date < ?', true, warn_date)
    #containers.each do |container|
    #  message = Message.find_by_container_id_and_kind(container.id, 2)
    #  if !message
    #    message = Message.new
    #    message.chemical = container.chemical
    #    message.container = container
    #    message.kind = 2
    #    message.text = 'Container expired'
    #    message.save
    #    users = User.all
    #    users.each do |user|
    #      user.new_message = true
    #      user.save
    #    end
    #  end
    #end
    Message.create_expired_messages
    render text: "checked\n"
  end
  
  def get_days_before
    setting = Setting.find(1)
    return setting.days_before_warn
  end
  
end
