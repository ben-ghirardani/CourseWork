DROP TABLE pizza_orders;
DROP TABLE customers;

CREATE TABLE customers (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE pizza_orders (
  -- delete the first_name and last_name from pizza_orders
  id SERIAL4 PRIMARY KEY,
  topping VARCHAR(255),
  quantity INT2,
  customer_id INT4 REFERENCES customer_id
);