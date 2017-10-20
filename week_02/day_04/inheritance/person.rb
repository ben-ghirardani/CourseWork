class Person

  attr_reader :first_name, :last_name, :hit_points

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @hit_points = 100
  end

  def talk
    puts "My name is #{first_name} #{last_name}"
  end

end
