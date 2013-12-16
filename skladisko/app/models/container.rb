class Container < ActiveRecord::Base
  attr_accessor :chemical_name
  after_initialize :add_chemical_name
  belongs_to :chemical
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  
  def expired
    setting = Setting.find(1)
    days_before_warn = setting.days_before_warn
    warn_date = DateTime.now + days_before_warn
    return expiration_date < warn_date
  end
  
  def remove_obsolete_messages
    message = Message.find_by_container_id(self.id)
    message.delete
  end
  
  def add_chemical_name
    chemical_name = ""
  end
  
end
