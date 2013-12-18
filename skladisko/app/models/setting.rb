class Setting < ActiveRecord::Base
  validates :days_before_warn, numericality: { only_integer: true }
end
