class ParamsController < ApplicationController
  
  def show
    render text: params
  end
  
end
