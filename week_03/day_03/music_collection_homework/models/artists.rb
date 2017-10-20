class Artist

  def initialize(options)
    @name = options['name']
    @id = options['id'].to_i if options['id']
  end


  def save
    sql = ''
  end


end