class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |user|
      user.string :username
      user.string :name
      user.string :password_hash
      user.string :password_salt
      user.boolean :admin
      user.boolean :new_message, default: false

      user.timestamps
    end
  end
end
