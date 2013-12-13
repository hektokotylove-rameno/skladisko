class MessagesController < ApplicationController
  skip_before_action :require_login, only: [:check_expired]
  
  def index
    @messages = Message.all
  end
  
  
  def check_expired
    containers = Container.where('real = ? AND expiration_date < ?', true, DateTime.now)
    containers.each do |container|
      message = Message.find_by_container_id_and_kind(container.id, 2)
      if !message
        message = Message.new
        message.chemical = container.chemical
        message.container = container
        message.kind = 2
        message.text = 'Container expired'
        message.save
      end
    end
    render text: 'checked'
  end
  
end
