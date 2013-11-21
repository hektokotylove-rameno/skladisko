class CreateContainers < ActiveRecord::Migration
  def change
    create_table :containers do |t|
      t.float :amount
      t.datetime :expiration_date
      t.string :location
      t.string :catalog_number
      t.references :chemical, index: true

      t.timestamps
    end
  end
end
