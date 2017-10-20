require('sinatra')
require('sinatra/contrib/all')
require('pry')
require_relative('./models/calculator')
require('json')

get '/' do
  erb(:home)
end

get '/about-us' do
  @title = "About Us"
  erb(:about_us)
end

get '/add/:num1/:num2' do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  @calculation = calculator.add()
  erb(:result)
end


get '/subtract/:num1/:num2' do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  return calculator.subtract().to_s
end


get '/multiply/:num1/:num2' do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  return calculator.multiply().to_s
end


get '/divide/:num1/:num2' do
  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)
  return calculator.divide().to_s
end


get '/all/:num1/:num2' do
  content_type(:json)

  calculator = Calculator.new(params[:num1].to_i, params[:num2].to_i)

  results = {
    add: calculator.add,
    subtract: calculator.subtract,
    multiply: calculator.multiply,
    divide: calculator.divide
  }

  return results.to_json

end
