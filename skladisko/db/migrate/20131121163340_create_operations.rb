class CreateOperations < ActiveRecord::Migration
  def change
    create_table :operations do |t|
      t.integer :kind
      t.datetime :date
      t.string :note
      t.references :user, index: true
      t.references :project, index: true

      t.timestamps
    end
  end
end
