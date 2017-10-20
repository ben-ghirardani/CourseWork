class River

  attr_accessor :name, :fish_in_river

  def initialize(name, fishes)
    @name = name
    @fishes = fishes
  end

  def number_of_fishes
    return @fishes.count
  end

  def get_fish
    return @fishes.pop
  end

end