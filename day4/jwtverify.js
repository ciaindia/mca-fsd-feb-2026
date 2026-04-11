var jwt = require("jsonwebtoken");
const SECRETKEY = "SECR3TKEY"

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIxMjMiLCJpYXQiOjE3NzU4OTk4OTYsImV4cCI6MTc3NTkwMDE5Nn0.9PVzTmLQaMO58uzYhvEn0kXfiXUAH0ugygZ9h-voxAM";

jwt.verify(token, SECRETKEY, function (err, decoded) {
    if (err) {
        console.log(err);
    } else {
        console.log(decoded);
    }
});

//CW: Create REST API /login to authenticate user by username and password 
// and return JWT in response
//pass username and password in POST call 
//Use users table from mysql 
//Use mysql2 module for database connection 