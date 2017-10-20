// var numbers = [1, 2, 3, 4, 5];

// for (var number of numbers){
//   console.log(number);
// }

// var printNumber = function(number){
//   console.log("the number is:", number);
// };

// numbers.forEach(printNumber);

// var ourForEach = function(array, callbackForItem) {
//   for (var item of array) {
//     callbackForItem(item);
//   }
// }


// ourForEach(numbers, function(number){
//   console.log("the number is", number);
// })

var numbers = [1, 2, 3, 4, 5];

// FIND
function isThree(number) {
  return number === 3;
}

console.log(numbers.find(isThree));

// MAP
var doubles = numbers.map(function(x){
  return x * 2;
})

console.log(numbers);
console.log(doubles);

// FILTER
var moreThanThree = numbers.filter(function(number){
  return number > 3;
})

console.log(moreThanThree);
 
 // SOME