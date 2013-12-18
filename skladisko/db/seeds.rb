Chemical.create!([
  {name: "Voda", total_amount: 0.0, critical_amount: 0.0, unit: "l", group_id: 1, note: ""},
  {name: "Pivo", total_amount: 0.0, critical_amount: 0.0, unit: "l", group_id: 1, note: ""},
  {name: "Krv", total_amount: 0.0, critical_amount: 0.0, unit: "ml", group_id: 1, note: ""},
  {name: "Pečené kura", total_amount: 0.0, critical_amount: 0.0, unit: "g", group_id: 2, note: ""},
  {name: "Hovno", total_amount: 0.0, critical_amount: 0.0, unit: "kg", group_id: 3, note: ""}
])
Group.create!([
  {name: "tekutiny"},
  {name: "chutné látky"},
  {name: "smradľavé látky"}
])
Setting.create!([
  {days_before_warn: 0}
])
User.create!([
  {username: "admin", name: "Admin", password_hash: "$2a$10$IBmuU2sGDduXZlQrYicbbui13CvbXWL.tg2KM24IV5TWIs1N0xY2u", password_salt: "$2a$10$IBmuU2sGDduXZlQrYicbbu", admin: nil}
])
