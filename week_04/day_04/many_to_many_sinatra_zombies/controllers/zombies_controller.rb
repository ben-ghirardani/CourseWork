require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative( '../models/zombie.rb' )

get '/zombies' do
  @zombies = Zombie.all()
  erb( :"zombies/index" )
end

get '/zombies/:id' do
  @the_zombies = Zombie.find(params['id'])
  @victims = @the_zombies.victims
  erb(:"zombies/show")
end