class Chemical < ActiveRecord::Base
  has_many :containers
  has_and_belongs_to_many :operations
end
