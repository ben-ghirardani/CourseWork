require( 'sinatra' )
require( 'sinatra/contrib/all' ) if development?
require_relative('controllers/zombies_controller')
require_relative('controllers/victims_controller')
require_relative('controllers/bitings_controller')

get '/' do
  erb( :index )
end

