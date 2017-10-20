var express = require('express');
var router = new express.Router();

router.use('/cats', require('./cats'));

// router.get('/', function(request, response){
//     response.json({data: "Welcome!"});
// })