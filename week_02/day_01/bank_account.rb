class BankAccount
  
  attr_reader :holder_name, :type
  attr_accessor :amount

  def initialize(name, amount, type)
    @holder_name = name
    @amount = amount
    @type = type
  end

  def deposit(deposit_amount)
    @amount += amount
  end

  def pay_fee
    @amount -= 10 if @type == "personal"
    @amount -= 20 if @type == "business"
  end



end