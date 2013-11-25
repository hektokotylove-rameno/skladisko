class Container < ActiveRecord::Base
  belongs_to :chemical
  has_and_belongs_to_many :operations
end
