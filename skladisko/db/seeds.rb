# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# ruby encoding: utf-8
Chemical.create(name: 'Voda', unit: 'l', group: 'tekutiny', note: 'Vodisko')
Chemical.create(name: 'Pivo', unit: 'l', group: 'tekutiny', note: 'Pivcisko')
Chemical.create(name: 'Pecene kura', unit: 'g', group: 'obed', note: 'Jedlo')
Chemical.create(name: 'Krv', unit: 'l', group: 'tekutiny', note: 'Legalne ziskana')
Setting.create()