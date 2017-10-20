require('minitest/autorun')
require_relative('../river.rb')
require_relative('../bear.rb')
require_relative('../fish.rb')


class TestRiver < Minitest::Test


# setup is here so that we can refer to it throughout our tests rather than always have to re-set all our parameters every time.
  def setup
    @fish1 = Fish.new("Sarah")
    @fish2 = Fish.new("Jeremy")
    @fish3 = Fish.new("Lucy")
    @river = River.new("Amazon", [@fish1, @fish2, @fish3])
  end

  def test_initial_state
    assert_equal(3, @river.number_of_fishes)
  end

  def test_can_get_fish
    fish = @river.get_fish
    assert_equal(@fish3.name, fish.name)
  end  

  def test_can_get_fish
    fish = @river.get_fish
    assert_equal(@fish3.name, fish.name)
  end


end
