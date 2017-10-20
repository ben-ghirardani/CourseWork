class SportsTeam

  attr_accessor :team_name, :players, :coach

def initialize (team_name, players, coach, points)
  @team_name = team_name
  @players = players
  @coach = coach
  @points = points
end

  # def get_team_name
  #   return @team_name
  # end

  # def get_players
  #   return @players
  # end

  # def get_coach
  #   return @coach
  # end

  # def set_coach(coach)
  #   @coach = coach
  # end 

    def player_array(players)
         @players.include?("Dave")
    end 

    def points_result
      return @points
    end
  
end
