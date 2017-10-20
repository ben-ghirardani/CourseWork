require('minitest/autorun')
require_relative('../river.rb')
require_relative('../bear.rb')
require_relative('../fish.rb')


class TestBear < Minitest::Test

  def setup
    @bear
  end



  def test_bear_name
    new_bear = Bear.new("Dave")
    assert_equal("Dave", new_bear.name)
  end

  def test_bear_stomach
    new_bear = Bear.new("Dave")
    assert_equal([], new_bear.stomach)
  end
  

end