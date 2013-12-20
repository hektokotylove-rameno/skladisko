class Chemical < ActiveRecord::Base
  attr_accessor :group_name
  after_initialize :add_group_name
  belongs_to :group
  has_many :containers, :order => 'expiration_date, amount'
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  validates :group_id, presence: true
  validates :name, presence: true
  validates :total_amount, numericality: {greater_than_or_equal_to: 0}
  
  #before_save :check_minimum
  before_update :check_minimum
  
  def check_minimum
    if below_minimum
      if !minimum_message_sent
        message = Message.new()
        message.chemical = self;
        message.text = 'critical amount'
        message.kind = 1
        message.save
        users = User.all
        users.each do |user|
          user.new_message = true
          user.save
        end
      end
    else
      message = Message.find_by_chemical_id_and_kind(self.id, 1)
      if message
        message.destroy
      end
    end
  end
  
  def below_minimum
    self.total_amount <= self.critical_amount
  end
  
  def minimum_message_sent
    message = Message.find_by_chemical_id_and_kind(self.id, 1)
    if message
      return true
    end
    return false
  end
  
  def add_group_name
    group_name = ""
  end
  
end
