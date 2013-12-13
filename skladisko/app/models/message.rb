class Message < ActiveRecord::Base
  
  belongs_to :chemical
  belongs_to :container
  
  def self.create_expired_messages
    #containers = Container.where('real = ? AND expiration_date < ?', true, DateTime.now)
    #containers.each do |container|
    #  message = Message.find_by_container_id_and_kind(container.id, 2)
    #  if !message
    #    message = Message.new
    #    message.chemical = container.chemical
    #    message.container = container
    #    message.kind = 2
    #    message.text = 'Container expired'
    #    message.save
    #  end
    #end
  end
end
