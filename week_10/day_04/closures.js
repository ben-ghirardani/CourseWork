// var setupAddFunction = function(){
//   var counter = 0;
//
//   return function(modifier){
//     counter += modifier;
//     console.log(counter);
//   }
// }
//
// var add = setupAddFunction();
// add(5);
// add(2);
// add(3);


var setupConversation = function(){
  var conversation = [];

  return function(message){
    conversation.push(message);

    conversation.forEach(function(part){
      console.log(part);
    });
  }
}




var addMessage = setupConversation();

addMessage("I've got something very important to tell you that must never be forgotten");
addMessage("Oh yeah?");
addMessage("Oh, no. Wait... It's fine.");
