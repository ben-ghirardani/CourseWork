
require('minitest/autorun')

require_relative('./student')

class TestStudent < MiniTest::Test

  def test_new_student_name
    new_student = Student.new("Alan", 14)
  assert_equal("Alan", new_student.get_name)
  end

  def test_new_student_cohort
    new_student = Student.new("Alan", 14)
  assert_equal(14, new_student.get_cohort)
  end

  def test_update_name
    new_student = Student.new("Alan", 14)
    # assert_equal("Alan", new_student.get_name)
    new_student.set_name("Ben")
    assert_equal("Ben", new_student.get_name)
  end

def test_update_cohort
  new_student = Student.new("Alan", 14)
  assert_equal(14, new_student.get_cohort)
  new_student.set_cohort(13)
  assert_equal(13, new_student.get_cohort)
end

def test_talk
  new_student = Student.new("Ben", 14)
  assert_equal("I can Talk!", new_student.get_talk)
end 

def test_fav_lang
  new_student = Student.new("Ben", 14)
  assert_equal("I love Ruby", new_student.say_fav_lang("Ruby"))
end 

end 
