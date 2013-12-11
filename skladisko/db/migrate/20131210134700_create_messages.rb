class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :kind
      t.string :text
      t.references :chemical, index: true
      t.references :container, index: true

      t.timestamps
    end
  end
end
