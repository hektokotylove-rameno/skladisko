class ContainersOperations < ActiveRecord::Migration
  def change
    create_table :containers_operations do |t|
      t.integer :container_id
      t.integer :operation_id
    end
  end
end
