# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

[
  'France',
  'England',
  'Canada',
  'Germany',
  'Japan',
  'United States'
].each do |room_name|
  Room.find_or_create_by!(name: room_name)
end
