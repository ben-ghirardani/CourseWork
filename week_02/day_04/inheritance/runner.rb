require_relative('./person')
require_relative('./medic')
require_relative('./agent')
require_relative('./car')
require_relative('./motorbike')


person = Person.new("Ben", "Ghirardani")

puts person.talk

agent = Agent.new("James", "Bond")

puts agent.talk

medic = Medic.new("The", "Medic")

puts medic.talk
puts medic.heal
