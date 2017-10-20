require('minitest/autorun')
require_relative('./my_functions.rb')

class FunctionsTest < MiniTest::Test
  
  def test_add()
    expected = 5
    actual = add(2, 3)
    assert_equal(expected, actual)
  end

end


