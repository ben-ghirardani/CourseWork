var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.json({data: "hello"});
});

// The most specific route comes highest else the next get request 
// will catch our request before we reach the one we want.
// May still work, but best practice to keep it this way.

app.use(require('./controllers/index'))

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('App running on port' + this.address().port);
});