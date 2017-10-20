class TennisCourt

  def initialize(name, capacity, surface_type, matches, vip_only)
    @name = name
    @capacity = capacity
    @surface_type = surface_type
    @matches = []
    @vip = vip_only
  end

  def summary
    return "#{@name} has a #{@capacity} capacity and has a #{@surface_type} surface. "
  end

  def add_match(match)
      @matches.push(match)
  end

  def vip_access?
    return @vip_only
  end
end

centre_court = TennisCourt.new("Centre Court", 50000, "Grass", 2, true)

p centre_court