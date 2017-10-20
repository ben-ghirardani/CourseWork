class Bear

  attr_accessor :name, :stomach

  def initialize(name, type)
    @name = name
    @type = type
    @stomach = []
  end

  def food_count
    return @stomach.count
  end

  def take_fish_from_river(river)
    fish = river.get_fish
    @stomach.push(fish) if !fish.nil?
  end



end