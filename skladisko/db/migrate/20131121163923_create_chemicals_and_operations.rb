class CreateChemicalsAndOperations < ActiveRecord::Migration
  def change
    create_table :chemicals_operations do |t|
      t.integer :chemical_id
      t.integer :operation_id
    end
  end
end
