class cow {
  constructor(name){
    this.name = name;
  }

  moo() {
    return `${this.name} says moo`;
  }

}

var cow = new Cow();
console.log(cow.moo());

// var Cow = function(name){
//   this.name = name;
// }

// Cow.prototype = {
//   moo: function(){
//     return "moo";
//   }
// }

// var cow = new Cow();
// console.log(cow.moo());