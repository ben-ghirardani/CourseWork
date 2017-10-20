class Student

# attr_reader :name, :cohort

  def initialize (name, cohort)
    @name = name
    @cohort = cohort
  
  end

  def get_name
    return @name
  end

  def get_cohort
    return @cohort
  end

  def set_name(name)
    @name = name
  end

  def set_cohort(cohort)
    @cohort = cohort
  end

  def get_talk()
    return "I can Talk!"
  end

  def say_fav_lang(language)
    return "I love #{language}"
  end


end 