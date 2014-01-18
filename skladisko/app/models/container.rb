class Container < ActiveRecord::Base
  attr_accessor :chemical_name
  after_initialize :add_chemical_name
  belongs_to :chemical
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  validates :amount, presence: true, numericality: true
  validates :expiration_date, presence: true, if: :expirable? and :real?
  validates :catalog_number, presence: true, if: :real?
  
  def expired
    if expirable?
      return expiration_date < DateTime.now
    end
    return false
  end
  
  def remove_obsolete_messages
    message = Message.find_by_container_id(self.id)
    if message
      message.delete
    end
    
    
  end
  
  def add_chemical_name
    chemical_name = ""
  end
  
  def real?
    return self.real
  end
  
  def expirable?
    return self.expirable
  end
  
end
