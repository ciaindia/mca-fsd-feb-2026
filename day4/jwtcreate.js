var jwt = require("jsonwebtoken");
const SECRETKEY = "SECR3TKEY"

var token = jwt.sign({ userid: "123" }, SECRETKEY, { expiresIn: "5m" });

console.log(token);