// var myPerson = {
//   name:   "Guybrush",
//   age:    32,
//   weapon: "cutlass",
//   talk:   function(){
//             console.log("shiver me timbers!, my name is " + this.name);
//           }
// };

// // var keyToAccess = "age";
// // console.log(myPerson[keyToAccess]);


// var keys = Object.keys(myPerson);

// for (key of keys) {
//   console.log("key:", key, "value:", myPerson[key]);
// } 


// console.log(myPerson['weapon']);

// myPerson.talk();

// console.log("my person", myPerson);

// console.log(myPerson.weapon);

// console.log(myPerson);
// myPerson.name = "Guybrush Threepwood";
// myPerson.age += 1;
// console.log(myPerson);

// console.log(myPerson);
// myPerson.occupation = "Mighty Pirate";
// console.log(myPerson);


// var object = {};
// var anotherObject = Object.create(null);
// var yetAnotherObject = new Object();

// object.name = "the name";


var myBear = {
  type: "brown bear",
  name: "barry the bear",
  belly: [],
  eat: function(food){
    this.belly.push(food);
  }
}

myBear.eat("a food");
console.log(myBear.belly);