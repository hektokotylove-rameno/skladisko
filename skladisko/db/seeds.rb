User.create!([
  {username: "admin", name: "Admin", password_hash: "$2a$10$eZlnTjkyqLhpiNOOamg2sOmR5khIK.zXgjeo1W3r.icQ/Xu7cgom2", password_salt: "$2a$10$eZlnTjkyqLhpiNOOamg2sO", admin: true, new_message: false},
  {username: "timo", name: "Timotej Krajči", password_hash: "$2a$10$DKgE0XhSbezBBAOM4a03PeWslP6N7OfzK5ynPG97eejqSJ/i/T3Ji", password_salt: "$2a$10$DKgE0XhSbezBBAOM4a03Pe", admin: nil, new_message: false}
])
