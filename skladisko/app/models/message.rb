class Message < ActiveRecord::Base
  
  belongs_to :chemical
  belongs_to :container
  
  after_destroy :check_if_any

  
  def self.create_expired_messages
    days_before = get_days_before
    warn_date = DateTime.now + days_before
    containers = Container.where('real = ? AND expiration_date < ?', true, warn_date)
    containers.each do |container|
      message = Message.find_by_container_id_and_kind(container.id, 2)
      if !message
        message = Message.new
        message.chemical = container.chemical
        message.container = container
        message.kind = 2
        message.text = 'Container expired'
        message.save
        users = User.all
        users.each do |user|
          user.new_message = true
          user.save
        end
      end
    end
  end
  
  def self.get_days_before
    setting = Setting.find(1)
    return setting.days_before_warn
  end
  
  def check_if_any
    messages = Message.all
    if messages.empty?
      users = User.all
      users.each do |user|
        user.new_message = false
        user.save
      end
    end
  end
  
end