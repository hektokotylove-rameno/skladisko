class Operation < ActiveRecord::Base
  belongs_to :user
  belongs_to :project
  has_and_belongs_to_many :chemicals
  has_and_belongs_to_many :containers
  accepts_nested_attributes_for :containers, allow_destroy: true
  
  KINDS = {'Add' => 1, 'Retract' => 2, 'Modify' => 3}
  
  def get_kind
    if self.kind == 1
      return 'add'
    end
    if self.kind == 2
      return 'retract'
    end
    if self.kind == 3
      return 'modify'
    end
  end    
  
end
