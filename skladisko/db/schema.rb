# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140118213626) do

  create_table "chemicals", force: true do |t|
    t.string   "name"
    t.float    "total_amount",    default: 0.0
    t.float    "critical_amount", default: 0.0
    t.string   "unit"
    t.integer  "group_id"
    t.string   "note"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "chemicals", ["group_id"], name: "index_chemicals_on_group_id"

  create_table "chemicals_operations", force: true do |t|
    t.integer "chemical_id"
    t.integer "operation_id"
  end

  create_table "containers", force: true do |t|
    t.float    "amount"
    t.datetime "expiration_date"
    t.boolean  "expirable",       default: true
    t.integer  "location_id"
    t.string   "catalog_number"
    t.boolean  "real"
    t.integer  "chemical_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "containers", ["chemical_id"], name: "index_containers_on_chemical_id"
  add_index "containers", ["location_id"], name: "index_containers_on_location_id"

  create_table "containers_operations", force: true do |t|
    t.integer "container_id"
    t.integer "operation_id"
  end

  create_table "groups", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: true do |t|
    t.integer  "kind"
    t.string   "text"
    t.integer  "chemical_id"
    t.integer  "container_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "messages", ["chemical_id"], name: "index_messages_on_chemical_id"
  add_index "messages", ["container_id"], name: "index_messages_on_container_id"

  create_table "operations", force: true do |t|
    t.integer  "kind"
    t.datetime "date"
    t.string   "note"
    t.boolean  "protocol"
    t.string   "name"
    t.integer  "user_id"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "operations", ["project_id"], name: "index_operations_on_project_id"
  add_index "operations", ["user_id"], name: "index_operations_on_user_id"

  create_table "operations_users", force: true do |t|
    t.integer "operation_id"
    t.integer "user_id"
  end

  create_table "projects", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "restore_data", force: true do |t|
    t.string   "attachment"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "settings", force: true do |t|
    t.integer  "days_before_warn", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "name"
    t.string   "password_hash"
    t.string   "password_salt"
    t.boolean  "admin"
    t.boolean  "new_message",   default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
