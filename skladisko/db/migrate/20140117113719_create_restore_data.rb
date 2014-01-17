class CreateRestoreData < ActiveRecord::Migration
  def change
    create_table :restore_data do |t|
      t.string :attachment

      t.timestamps
    end
  end
end
