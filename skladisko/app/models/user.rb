class User < ActiveRecord::Base
  validates :username, presence: true, length: {minimum: 3}, uniqueness: true
  validates :password, presence: true, confirmation: true
  
  attr_accessor :password
  before_save :encrypt_password
  
  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
