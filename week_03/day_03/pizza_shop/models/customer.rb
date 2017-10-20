require('pg')
require_relative('../db/sql_runner')
require_relative('pizza_order')

class Customer

  attr_reader :id, :name

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
  end

  def self.all()
    sql = ' SELECT * FROM customers'
    customers = sql_runner.run(sql)
    return customers.map { |person| Customer.new(person) }
  end

  def self.delete_all()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
    sql = "DELETE FROM customers" 
    result = db.exec(sql)
    db.close()
  end

  # def self.delete_all()
  #   sql = "DELETE FROM customers"
  #   customers = sql_runner.run(sql)
  #   return customers.map { |person| Customer.new(person) }
  # end


  def save
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
    sql = "INSERT INTO customers (name) VALUES ('#{@name}') RETURNING *"
    result = db.exec(sql)
    db.close()
    @id = result[0]['id'].to_i
  end

  def pizza_orders()
    sql = "SELECT * FROM pizza_orders WHERE customer_id = #{ @id }"
    results = SqlRunner.run( sql )
    orders = results.map { |order| PizzaOrder.new( order ) }
    return orders
  end

end