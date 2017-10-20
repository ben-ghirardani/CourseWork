var WaterBottle = function() {
  this.volume = 0;
  this.fill = function() {
    return this.volume = 100;
  }
  this.empty = function() {
    return this.volume = 0;
  }
  this.drink = function() {
    if(this.volume > 10){
    return this.volume -= 10;
  } else {
    return "Not enough water to drink."
  }
}
}

module.exports = WaterBottle;