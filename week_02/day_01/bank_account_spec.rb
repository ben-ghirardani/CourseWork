require('minitest/autorun')
require_relative('./bank_account')

class TestBankAccount < Minitest::Test

  def test_account_name
    bank_account = BankAccount.new("John", 5000, "business")
    # *** bank_account is the Object. It calls on the BankAccout class to define it, using the specific attributes given. ***
    bank_account_2 = BankAccount.new("Alex", 1000, "personal")

    bank_account.deposit(10000)
    
    p bank_account
    p bank_account_2
    
    assert_equal(15000, bank_account.amount)


    assert_equal("John", bank_account.holder_name)
  end


end