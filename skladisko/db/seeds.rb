#encoding: utf-8

Chemical.create!([
  {name: "Hovno", total_amount: 0.0, critical_amount: 1.0, unit: "kg", group_id: 1, note: "hovnisko"},
  {name: "Pivo", total_amount: 0.0, critical_amount: 1.5, unit: "l", group_id: 2, note: "pivcisko"},
  {name: "Voda", total_amount: 0.0, critical_amount: 10.0, unit: "l", group_id: 2, note: "vodisko"},
  {name: "Piesok", total_amount: 0.0, critical_amount: 1.0, unit: "t", group_id: 3, note: "stavebný matroš"}
])
Group.create!([
  {name: "pevné látky"},
  {name: "tekutiny"},
  {name: "sypké veci"}
])
Setting.create!([
  {days_before_warn: 0}
])
