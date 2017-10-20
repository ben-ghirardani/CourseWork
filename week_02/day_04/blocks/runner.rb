require_relative('./calculator')

calculator = Calculator.new

# puts calculator.add_one([1, 2, 3])
# puts "==========================="
# puts calculator.multiply_by_two([1, 2, 3])
# puts "============================"
# puts calculator.run_whatever_code_i_pass_you { |name| "Hello " + name } 
# puts "============================"
# puts calculator.map([1, 2, 3]) { |item| item + 1  }

array = [1, 2, 3]
result = array.map { |item| item + 1  }

each_array= []

array.each do |item| 
  each_array << item + 1
end

p each_array
