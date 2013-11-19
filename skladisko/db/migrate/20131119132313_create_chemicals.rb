class CreateChemicals < ActiveRecord::Migration
  def change
    create_table :chemicals do |t|
      t.string :name
      t.float :total_amount, :default => 0.0
      t.string :unit
      t.string :group
      t.string :note

      t.timestamps
    end
  end
end
