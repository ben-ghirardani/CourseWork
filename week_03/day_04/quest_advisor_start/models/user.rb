require_relative("../db/sql_runner")
require_relative("./location")

class User

  attr_reader :id
  attr_accessor :name

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO users (name) VALUES ('#{ @name }') RETURNING id"
    user = SqlRunner.run( sql ).first
    @id = user['id'].to_i
  end

  def locations()
    sql = "SELECT locations.* FROM locations
          INNER JOIN visits ON visits.location_id = locations.id
          WHERE user_id = #{@id}"
    return Location.map_items(sql).first
  end

  def self.all()
    sql = "SELECT * FROM users"
    return self.map_items(sql)
  end

  def self.delete_all() 
    sql = "DELETE FROM users"
    SqlRunner.run(sql)
  end

  def self.map_items(sql)
    users = SqlRunner.run(sql)
    result = users.map { |user| User.new(user) }
    return result
  end

end