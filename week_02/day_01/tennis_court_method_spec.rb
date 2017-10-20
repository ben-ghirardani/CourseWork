require('minitest/autorun')
require_relative('./bank_account')

class TestTennisCourt < Minitest::Test

  def test_tennis_court
    tennis_court = TennisCourt.new(50, 25, 5, 1000)
    p tennis_court
  end




end