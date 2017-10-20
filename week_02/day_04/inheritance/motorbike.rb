require_relative('./vehicle')

class Motorbike < Vehicle


  def initialize
    super(2, "Honda")
  end


  def start_engine
    return super() + "I'm a motorbike!"
  end


end