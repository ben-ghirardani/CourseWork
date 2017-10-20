// var wisePerson = Object.create({ wisdom: function() {console.log("hello!")} })
// wisePerson.wisdom = function() {
//     console.log("commit often!")
//   };


// var myPerson = Object.create(wisePerson);
// myPerson.walk = function(){console.log("left right left right")};

// myPerson.wisdom();

var Fish = function(name, colour) {
  this.name = name;
  this.colour = colour;
}

Fish.prototype = {
  swim: function() {
    console.log(this.name + " can splash.");
  }
};

var myFish = new Fish("Nemo", "Orange with white stripes");
var anotherFish = new Fish("Dory", "Blue");
myFish.swim();
anotherFish.swim();
