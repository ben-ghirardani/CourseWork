class Component
  
  attr_reader :expiry_date

  def initialize(name, processor, country)
    @name = name
    @processor = processor
    @expiry_date = Time.now + 20
    @country = country
  end



end