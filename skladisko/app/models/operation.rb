class Operation < ActiveRecord::Base
  belongs_to :user
  belongs_to :project
  has_and_belongs_to_many :chemicals
  
  KINDS = {'Add' => 1, 'Retract' => 2, 'Modify' => 3}
  
end
