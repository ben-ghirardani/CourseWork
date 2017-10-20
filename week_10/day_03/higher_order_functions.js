var logRed = function(message) {
  console.log("It's red. " + message)
}

var logNotRed = function(message) {
  console.log("It's not red. " + message)
}

var redChecker = function(colour, isRedCallback, isNotRedCallback) {
  var message = "This is a message"
  if (colour === "red") {
    isRedCallback(message);
  } else {
    isNotRedCallback(message);
  }
}

redChecker("blue", logRed, logNotRed)