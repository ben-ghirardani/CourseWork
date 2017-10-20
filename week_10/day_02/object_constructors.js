// var House = function(sqFeet, bathrooms, bedrooms){
//   this.sqFeet = sqFeet;
//   this.bathrooms = bathrooms;
//   this.bedrooms = bedrooms;
//   this.numberOfRooms = function(){
//     return(this.bathrooms + this.bedrooms);
//   }
// }

// var house1 = new House(1000, 3, 4);
// var house2 = new House(2000, 4, 5);

// console.log(house1.numberOfRooms());
// console.log(house2.numberOfRooms());

// var Office = function(desks, meetingRooms){
//   this.desks = desks;
//   this.meetingRooms = meetingRooms;
//   this.averageDesksPerMeetingRoom = function(){
//     return this.desks / this.meetingRooms;
//   }
// }

// var office1 = new Office(100, 10);
// var office2 = new Office(2, 2);

// console.log(office1);
// console.log(office2.averageDesksPerMeetingRoom());

var Planet = function(name){
  this.name = name;
}

var solarSystem = function(name){
  this.name = name;
  this.planets = [];
  this.addPlanetToSystem = function(planet){
    this.planets.push(planet);
  }
}

var mercury = new Planet("Mercury");
var venus = new Planet("Venus");
var earth = new Planet("Earth");
var secretMoonBase = new Planet("Secret Moon Base");
var mars = new Planet("Mars");
var jupiter = new Planet("Jupiter");
var saturn = new Planet("Saturn");
var uranus = new Planet("Uranus");
var neptune = new Planet("Neptune");
var theSolarSystem = new solarSystem("The Solar System");

console.log(mercury);
console.log(theSolarSystem);

theSolarSystem.addPlanetToSystem(mercury);
theSolarSystem.addPlanetToSystem(venus);
theSolarSystem.addPlanetToSystem(earth);
theSolarSystem.addPlanetToSystem(secretMoonBase);
theSolarSystem.addPlanetToSystem(mars);
theSolarSystem.addPlanetToSystem(jupiter);
theSolarSystem.addPlanetToSystem(saturn);
theSolarSystem.addPlanetToSystem(uranus);
theSolarSystem.addPlanetToSystem(neptune);

console.log(theSolarSystem);
console.log(theSolarSystem.planets[0]);
console.log(theSolarSystem.planets[0].name);
