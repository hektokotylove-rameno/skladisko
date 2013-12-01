class Chemical < ActiveRecord::Base
  has_many :containers, :order => 'expiration_date, amount'
  has_and_belongs_to_many :operations
  
end
