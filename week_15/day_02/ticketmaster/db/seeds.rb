# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Album.delete_all()
Artist.delete_all()
Gig.delete_all()
Venue.delete_all()

a1 = Artist.create( { name: 'Oasis' } )
a2 = Artist.create( { name: 'Blur' } )

Album.create( { artist_id: a1.id, title: "Definately Maybe" } )
Album.create( { artist_id: a2.id, title: "Modern Life Is Rubbish" } )
Album.create( { artist: a2, title: "The Great Escape" } )

v1 = Venue.create( { name: "Hammersmith Apollo", location: "London" } )
v2 = Venue.create( { name: "Playhouse", location: "Edinburgh" } )

Gig.create( { price: 15, date: "2017-01-14", artist: a1, venue: v1 } )
Gig.create( { price: 20, date: "2018-02-15", artist: a2, venue: v2 } )