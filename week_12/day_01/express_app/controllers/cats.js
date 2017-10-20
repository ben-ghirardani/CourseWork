var express = require('express');
var catRouter = new express.Router();

var cats = ["Bengal", "British Shorthair", "Siamese"];

// SHOW
catRouter.get('/:id', function(request, response){
    response.json( {data: cats[req.params.id] } );
});

// UPDATE
catRouter.put('/:id', function(request, response){
    cats[request.params.id] = request.body.cat;
    response.json(cats);
});

// DELETE
catRouter.delete('/:id', function(request, response){
    cats.splice(request.params.id, 1);
    response.json(cats);
});

// INDEX
catRouter.get('/', function(request, response){
    response.json(cats);
});

// CREATE
catRouter.post('/', function(request, response){
    cats.push(request.body.cat);
    response.json(cats); 
});

module.exports = catRouter;