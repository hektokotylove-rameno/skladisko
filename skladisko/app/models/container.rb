class Container < ActiveRecord::Base
  belongs_to :chemical
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  
  def expired
    return expiration_date < DateTime.now
  end
  
end
