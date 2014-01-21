class CreateContainers < ActiveRecord::Migration
  def change
    create_table :containers do |t|
      t.float :amount
      t.datetime :expiration_date
      t.boolean :expirable, default: true
      t.references :location, index: true
      t.string :catalog_number
      t.boolean :real
      t.references :chemical, index: true

      t.timestamps
    end
  end
end
