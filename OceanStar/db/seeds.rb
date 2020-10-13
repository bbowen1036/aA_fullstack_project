# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
  username: 'Brian',
  password: 'password',
  email: 'user1@aa.io'
)

u2 = User.create!(
  username: 'John',
  password: 'password',
  email: 'user2@aa.io'
)

u3 = User.create!(
  username: 'Jill',
  password: 'password',
  email: 'user3@aa.io'
)

u4 = User.create!(
  username: 'Jenn',
  password: 'password',
  email: 'user4@aa.io'
)
