class CreateOperationsUsers < ActiveRecord::Migration
  def change
    create_table :operations_users do |t|
      t.integer :operation_id
      t.integer :user_id
    end
  end
end
