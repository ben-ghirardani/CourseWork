require('sinatra')
require('sinatra/contrib/all') if development?


# get '/hi' do
#   "Hello World"
# end

get '/roll-die' do
  result = [1, 2, 3, 4, 5, 6].sample
  return result.to_s
end

get '/name/:first/:last' do
  return "Your name is #{params[:first]} #{params[:last]}"
end

get '/square/:number' do
  squared = params[:number].to_i * params[:number].to_i
  return squared.to_s
end