class User < ActiveRecord::Base
  attr_accessor :password
  validates :username, presence: true, length: {minimum: 3}, uniqueness: true
  validates :name, presence: true, length: {minimum: 3}
  
  validates :password, confirmation: true
  validates :password_confirmation, presence: true, length: {minimum: 6}
    
  before_save :encrypt_password
  
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
