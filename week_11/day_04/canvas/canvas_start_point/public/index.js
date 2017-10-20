window.addEventListener("load", function() {
   
 var canvas = document.getElementById("main-canvas");
  var context = canvas.getContext("2d");
  x = canvas.width / 2;
  y = canvas.height / 2;
  speed = 3;

 var draw = function(){
    // console.log(x);
    // console.log(y);
    // console.log(window.event.keyCode);
   if (window.event.keyCode === 37) {
      // left
      x -= speed;
    } else if(window.event.keyCode === 39){
      // right
      x += speed;
    } else if (window.event.keyCode === 38){
      // up
      y -= speed;
    } else if (window.event.keyCode === 40){
      // down
      y += speed;
    }

   if (x > canvas.width) {
      x = canvas.width;
    } else if(x < 0){
      x = 0;
    }

   if (y > canvas.height){
      y = canvas.height;
    } else if (y < 0 ){
      y = 0;
    }

   

   context.beginPath();
    context.arc(x, y, 5, 0, Math.PI * 2, true)

    context.fill();
    context.stroke();

   var changeColor = function(){
    context.strokeStyle = this.value;
    context.fillStyle = this.value;
    }
    var colorPicker = document.querySelector("#input-color");
    colorPicker.addEventListener("change", changeColor);

 }

 document.onkeydown = draw;

 

})








// v2

// window.addEventListener('load', function() {

//   var canvas = document.getElementById('main-canvas');
//   var context = canvas.getContext('2d');
//   x = 300;
//   y = 250;

//   var draw = function(){
//     console.log(x);
//     console.log(y);

//     if (window.event.keyCode === 37) {
//       // left
//       x -= 1;
//     } else if(window.event.keyCode === 39){
//       // right
//       x += 1;
//     } else if (window.event.keyCode === 38){
//       // up
//       y -= 1;
//     } else if (window.event.keyCode === 40){
//       // down   
//         y += 1;
//     }

//     if (x > 600) {
//       x = 600;
//     } else if(x < 0){
//       x = 0;
//     }

//     if (y > 500){
//       y = 500;
//     } else if (y < 0 ){
//       y = 0;
//     }

//     context.beginPath();
//     context.arc(x, y, 5, 0, Math.PI * 2, true)
//     context.fill();
//     context.stroke();

//     var changeColor = function(){
//     context.strokeStyle = this.value;
//     context.fillStyle = this.value;
//     }
//     var colorPicker = document.querySelector('#input-color');
//     colorPicker.addEventListener('change', changeColor);

//   }

//   document.onkeydown = draw;

// })

// v1

// window.addEventListener('load', function(){
//     var canvas = document.getElementById('main-canvas');
//     var context = canvas.getContext('2d');

//     context.fillStyle = '#5066FF';
//     context.fillRect(10,10,80,50);
        
//     context.beginPath();
//     context.moveTo(100, 100);
//     context.lineTo(100, 200);
//     context.stroke();

//     context.beginPath();
//     context.moveTo(200, 200);
//     context.lineTo(200, 300);
//     context.lineTo(100, 300);
//     context.closePath();
//     context.stroke();

//     context.beginPath();
//     context.arc(500, 300, 50, 0, 2 * Math.PI);
//     context.stroke();

//     canvas.addEventListener('click', function(event){
//         drawCircle(event.layerX, event.layerY);
//     })

//     var drawCircle = function(x, y){
//         context.beginPath();
//         context.arc(x, y, 50, 0, 2 * Math.PI);
//         context.stroke();
//     }

//     var img = document.createElement('img');
//     img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"

//     var drawCat = function(){
//         context.drawImage(img, 200, 200, 90, 90);
//     }

// img.addEventListener('load', drawCat);

// var changeColor = function(){
//     context.strokeStyle = this.value;
// }

// var colorPicker = document.querySelector('#input-color');
// colorPicker.addEventListener('change', changeColor);


// })
