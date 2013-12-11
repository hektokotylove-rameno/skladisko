class Message < ActiveRecord::Base
  
  belongs_to :chemical
  
  def self.create_expired_messages
    containers = Container.where('expiration_date < ?', DateTime.now)
    containers.each do |container|
      message = Message.find_by_chemical_id_and_kind(container.chemical.id, 2)
      if !message
        message = Message.new
        message.chemical = container.chemical
        message.kind = 2
        message.text = 'expired'
        message.save
      end
    end
  end
  
end
