class LocationsController < ApplicationController
  
  def index
    locations = Location.all
    result = []
    locations.each do |location|
      result.push(location.name)
    end
    render json: result 
  end
end
