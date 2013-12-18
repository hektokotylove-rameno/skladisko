class GroupsController < ApplicationController
  
  def index
    groups = Group.all
    result = []
    groups.each do |group|
      result.push(group.name)
    end
    render json: result 
  end
  
end
