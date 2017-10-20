require('pg')

class SQLRunner

  def self.run(sql)
    begin
      db = PG.connect( { dbname: 'card_game', host: 'localhost' } )
      result = db.exec(sql)
    ensure
      db.close
    end
    return result
  end

end