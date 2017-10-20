require('minitest/autorun')
require_relative('../river.rb')
require_relative('../bear.rb')
require_relative('../fish.rb')

class TestFish < Minitest::Test

  def test_fish_has_name
    fish = Fish.new("Sarah")
    assert_equal("Sarah", fish.name)
  end

end