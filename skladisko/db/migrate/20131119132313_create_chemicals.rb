class CreateChemicals < ActiveRecord::Migration
  def change
    create_table :chemicals do |t|
      t.string :name
      t.float :total_amount, :default => 0.0
      t.float :critical_amount, :default => 0.0
      t.string :unit
      t.references :group, index: true
      t.string :note

      t.timestamps
    end
  end
end
