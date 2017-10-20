class Vehicle

  attr_reader :number_of_wheels, :model

  def initialize(number_of_wheels, model)
    @number_of_wheels = number_of_wheels
    @model = model
  end



  def start_engine
    return "Vrrmmm!"
  end



end