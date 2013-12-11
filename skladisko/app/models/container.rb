class Container < ActiveRecord::Base
  belongs_to :chemical
  has_and_belongs_to_many :operations
  
  def expired
    return expiration_date < DateTime.now
  end
  
end
