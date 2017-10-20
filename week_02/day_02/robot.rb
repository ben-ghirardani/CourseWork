require_relative('./component')

class Robot

attr_reader :dob, :components

  def initialize(name, model, job, colour)
    @name = name
    @model = model
    @job = job
    @colour = colour
    @dob = Time.now
    @components = []
    @serial_number = Time.now
  end

  def add_component(component)
    @components.push(component)
  end

end

C3PO = Robot.new("C3PO", "Droid", "Interpreter", "Gold")
p C3PO.dob
component = Component.new("TC39", "Intel", "UK")
C3PO.add_component(component)
p component

