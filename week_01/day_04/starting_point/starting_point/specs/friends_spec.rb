require( 'minitest/autorun' )
require_relative( '../friends' )

class TestFriends < MiniTest::Test

  def setup

    @person1 = {
      name: "Rick",
      age: 12,
      monies: 1,
      friends: ["Jay","Keith","Dave", "Val"],
      favourites: {
        tv_show: "Friends",
        things_to_eat: ["charcuterie"]
      } 
    }
    
    @person2 = {
      name: "Jay",
      age: 15,
      monies: 2,
      friends: ["Keith"],
      favourites: {
        tv_show: "Baywatch",
        things_to_eat: ["soup","bread"]
      } 
    }

    @person3 = {
      name: "Val",
      age: 18,
      monies: 20,
      friends: ["Rick", "Jay"],
      favourites: {
        tv_show: "Pokemon",
        things_to_eat: ["ratatouille", "stew"]
      } 
    }

    @person4 = {
      name: "Keith",
      age: 18,
      monies: 20,
      friends: ["Rick", "Jay", "Dave"],
      favourites: {
        tv_show: "Pokemon",
        things_to_eat: ["spaghetti"]
      } 
    }

    @person5 = {
      name: "Dave",
      age: 20,
      monies: 100,
      friends: [],
      favourites: {
        tv_show: "Scrubs",
        things_to_eat: ["spinach"]
      } 
    }

    @people = [@person1, @person2, @person3, @person4, @person5]

  end

  def test_getting_name
    result = get_name(@person5)
    assert_equal("Dave", result)
  end

  # 1. For a given person, return their favourite tv show

  def test_favourite_tv_show
    result = get_TV_show(@person5)
    assert_equal("Scrubs", result)
  end



  # 2. For a given person, check if they like a particular food

  def test_food_they_like
    result = chosen_food(@person4)
    assert_equal(["spaghetti"], result)
  end

  # 3. Allow a new friend to be added to a given person
  def test_add_new_friend
    result = new_friend(@person5)
    assert_equal(["Geoff"], result)
  end

  # 4. Allow a friend to be removed from a given person
def test_remove_friend
  result = lost_friend(@person4)
  assert_equal(["Rick", "Jay"], result)
end

  # 5. Find the total of everyone's money

def test_total_money
  result = money_total(@people)
  assert_equal(143, result)
end

  # 6. For two given people, allow the first person to loan a given value of money to the other

def test_loan_money
  result = loan_money(@person4, @person5)
  assert_equal(@person5[:monies] = 120, result)
end
  # 7. Find the set of everyone's favourite food joined together
# merge?
def test_all_the_food
  result = all_food(@people)
  assert_equal(@people[:favourites][:things_to_eat], result)
end

  # 8. Find people with no friends


  # VERY tough
  # Find the people who have the same favourite tv show

end
