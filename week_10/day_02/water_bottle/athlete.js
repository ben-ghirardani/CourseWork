var Athlete = function(bottle) {
  this.bottle = bottle;
  this.hydration = 100;
  this.distanceCovered = 0;
  this.run = function() {
    if(this.hydration == 0) {
      return "I won't go any further!"
    } else {
    return (this.hydration -= 10) & (this.distanceCovered += 10);
  }
  }
  this.drink = function() {
    this.hydration += 10
    this.bottle.drink()
  }
}

module.exports = Athlete;