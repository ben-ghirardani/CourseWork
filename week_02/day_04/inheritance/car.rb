require_relative('./vehicle')

class Car < Vehicle


  def initialize
    super(4, "Ferrari")
    @airbags = 2
  end
  



end