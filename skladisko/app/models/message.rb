class Message < ActiveRecord::Base
  
  belongs_to :chemical
  
  #def self.test
  #  message = Message.new
  #  chem = Chemical.find_by_id(1)
  #  message.chemical = chem
  #  message.text = 'test message'
  #  message.save
  #end
  
end
