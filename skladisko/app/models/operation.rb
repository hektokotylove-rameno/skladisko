class Operation < ActiveRecord::Base
  belongs_to :user
  belongs_to :project
  has_and_belongs_to_many :chemicals
  has_and_belongs_to_many :containers
  accepts_nested_attributes_for :containers, allow_destroy: true
  validates :kind, presence: true
  validates :project_id, presence: true
  #validates :chemical_id, presence: true
  
  KINDS = {'Add' => 1, 'Withdraw' => 2, 'Modify' => 3}
  
  def get_kind
    if self.kind == 1
      return 'Add'
    end
    if self.kind == 2
      return 'Withdraw'
    end
    if self.kind == 3
      return 'Modify'
    end
  end    
  
end
