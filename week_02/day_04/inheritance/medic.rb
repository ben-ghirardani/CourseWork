require_relative('./person')

class Medic < Person

  

  def heal
    puts "You have received +10 health."
    @hit_points = @hit_points += 10
    puts "You now have #{@hit_points} health."
  end




end