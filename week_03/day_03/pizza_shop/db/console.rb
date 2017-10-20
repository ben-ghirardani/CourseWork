require('pry-byebug')
require_relative('../models/pizza_order')
require_relative('../models/customer')

PizzaOrder.delete_all()
Customer.delete_all()

order1 = PizzaOrder.new({
  'customer_id' => customer1.id,
  'topping' => 'pepperoni',
  'quantity' => 2
  })

order1.save

customer1 = Customer.new( { 'name' => 'Zsolt' } )
customer1.save()

order1 # is a PizzaOrder object
order1.customer # gets us a Customer object from our PizzaOrder object
order1.customer.pizza_orders # gets us an array of PizzaOrder objects
order1.customer.pizza_orders[0] # gets us just the first PizzaOrder object
order1.customer.pizza_orders[0].customer # gets us the same Customer object back again

binding.pry
nil