require('pg')
require_relative('customer')

class PizzaOrder

  attr_reader :topping, :quantity, :customer_id

  def initialize(options)
    @id = options['id'].to_i if options['id']
    @topping = options['topping']
    @quantity = options['quantity'].to_i
    @customer_id = options['customer_id'].to_i
  end

  def save()
    db = PG.connect( { dbname: 'pizza_shop', host: 'localhost' } )
    sql = "INSERT INTO pizza_orders(
    topping,
    quantity,
    customer_id
    ) VALUES (
    '#{ @topping }',
    #{ quantity },
    #{ customer_id }
    );"
    result = db.exec(sql)
    db.close()
    @id = result[0]['id'].to_i
  end

  def customer()
    sql = "SELECT * FROM customers WHERE id = #{ @customer_id }"
    results = SqlRunner.run( sql )
    customer_data = results[0]
    customer = Customer.new( customer_data )
    return customer
  end

end