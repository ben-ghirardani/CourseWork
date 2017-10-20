
var app = function(){
    
    var button = document.querySelector('button');
    button.addEventListener('click', handleButtonClick());

    var input = document.querySelector('input');
    input.addEventListener('keyup', handleKeyPress);

    var select = document.querySelector('select');
    select.addEventListener('change', handleDropdownSelect);

}

// Counter variable was in the global scope, better to have it wrapped up within the method.
// Refactored into the handleButtonClick method to prevent gobal access.

var handleDropdownSelect = function(){
    var pTag = document.querySelector('#select-result');
    pTag.innerText = this.value + ", great choice!";
}

var handleButtonClick = function(){
    var buttonCounter = 0;    
    var pTag = document.querySelector('#button-result');
    return function() {
    buttonCounter++;
    pTag.innerText = 'Woa dude, I totally got clicked ' + buttonCounter + ' times!';
    }    
}

var handleKeyPress = function(){
    var pTag = document.querySelector('#text-result');
    pTag.innerText = this.value;
}

window.addEventListener('load', app);