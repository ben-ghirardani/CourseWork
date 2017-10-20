
require('minitest/autorun')

require_relative('./sports_team')

class TestSportsTeam < MiniTest::Test

def test_get_team_name
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  assert_equal("Arsenal", new_team.team_name)
end

def test_get_players
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  assert_equal(["John", "Dave" ,"Bill"], new_team.players)
end

def test_get_coach
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  assert_equal("Alex", new_team.coach)
end

def test_set_coach
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  assert_equal("Alex", new_team.coach)
  new_team.coach = "Dave"
  assert_equal("Dave", new_team.coach)
end

def test_add_new_players
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  new_team.players << "Ian"
  assert_equal(["John", "Dave" ,"Bill", "Ian"], new_team.players)
end 

def test_check_array_names
  new_team = SportsTeam.new("Arsenal", ["John", "Dave" ,"Bill"], "Alex", 0)
  assert_equal(true, new_team.player_array("Dave"))
end 



end 