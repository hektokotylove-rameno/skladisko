class Chemical < ActiveRecord::Base
  has_many :containers, :order => 'expiration_date, amount'
  has_and_belongs_to_many :operations
  has_and_belongs_to_many :messages
  
  #before_save :check_minimum
  before_update :check_minimum
  
  def check_minimum
    if (self.total_amount <= self.critical_amount)
      message = Message.new()
      message.chemical = self;
      message.text = 'critical amount'
      message.kind = 1
      message.save
    else
      msgs = Message.find_all_by_chemical_id_and_kind(self.id, 1)
      msgs.each do |message|
        message.destroy
      end
    end
  end
  
end
