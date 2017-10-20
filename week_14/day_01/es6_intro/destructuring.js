// ES5
const req = {};

req.body = {
    username: "Chuck",
    password: "letmein"
}

var username = req.body.username;

// ES6
const {username, password} = req.body; 
// creates two variables, 'username' and 'password' with the values in the req.body object.

const {username: un, password: pw} = req.body;
// reassigns the variable names to the values after the colon.