def get_name(person)
  return person[:name]
end


def get_TV_show(person)
  return person[:favourites][:tv_show]
end

def chosen_food(person)
    return person[:favourites][:things_to_eat]
end

def new_friend(person)
  person[:friends].push("Geoff")
  return person[:friends]
end

def lost_friend(person)
  person[:friends].delete("Dave")
  return person[:friends]
end


def money_total(people)
  total = 0
  for person in people do
      total += person[:monies] 
  end
  return total
end

def loan_money(person4, person5)
  person5[:monies] += person4.delete(:monies)
end
  

def all_food(people)
  
end