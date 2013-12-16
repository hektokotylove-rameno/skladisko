class Container < ActiveRecord::Base
  attr_accessor :chemical_name
  after_initialize :add_chemical_name
  belongs_to :chemical
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  
  def expired
    return expiration_date < DateTime.now
  end
  
  def remove_obsolete_messages
    message = Message.find_by_container_id(self.id)
    message.delete
  end
  
  def add_chemical_name
    chemical_name = ""
  end
  
end
