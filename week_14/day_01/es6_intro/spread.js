var dimensions = [10, 5, 2];

var volume = function(height, width, length){
    return height * width * length
}

// ES5
volume(dimensions[0], dimensions[1], dimensions[2])

// ES6 - spread operator
volume(...dimensions);