class Calculator


  def map(items)
    result = []
    for item in items
      result << yield(item)
    end
    return result
  end

  


  def run_whatever_code_i_pass_you
    return yield("Ben")
  end


end