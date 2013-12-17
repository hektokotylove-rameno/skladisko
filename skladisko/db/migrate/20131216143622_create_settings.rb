class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.integer :days_before_warn, :default => 0

      t.timestamps
    end
  end
end
