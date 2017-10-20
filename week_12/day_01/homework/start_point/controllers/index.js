var express = require('express');
var router = express.Router();

router.use('/api/films', require('./films'));

router.get('/', function(request, response){
    response.json(films);
});

module.export = router;