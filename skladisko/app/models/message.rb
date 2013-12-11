class Message < ActiveRecord::Base
  
  belongs_to :chemical
  belongs_to :container
  
  def self.create_expired_messages
    containers = Container.where('expiration_date < ?', DateTime.now)
    containers.each do |container|
      message = Message.find_by_chemical_id_and_kind(container.chemical.id, 2)
      if !message
        message = Message.new
        message.chemical = container.chemical
        message.container = container
        message.kind = 2
        message.text = 'expired'
        message.save
      end
    end
  end
  
  def self.remove_obsolete
    messages = Message.find_all_by_kind(2)
    messages.each do |message|
      if (!message.container)
        message.delete
      end
    end
  end
  
end
