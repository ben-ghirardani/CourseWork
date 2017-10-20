var Bank = function() {
  this.accounts = []
}

Bank.prototype = {

  addAccount: function(account) {
    this.accounts.push(account)
  },

  totalValue: function(){
    newArray = [];
    for(account of this.accounts){
      newArray.push(account.value);
    }

    var result = newArray.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
     })
    return result;
  },

  accountByName: function(name){
    
  },



  largestAccount: function(){
    newArray = [];
    for(account of this.accounts){
      newArray.push(account.value);
    }

    var max = Math.max(newArray);

    f
  }
  


  }

module.exports = Bank;
