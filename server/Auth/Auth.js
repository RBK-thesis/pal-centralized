const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(DataBaseUser) {
  return jwt.sign(DataBaseUser, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15000000s"
  });
}

//-------------------------------------------------//
//-- this Authrization to check the user actios ---//
//-------------------------------------------------//

function AuthenticatToken(req, res, next) {
  //---------------------------------------------//
  // ----- get the Token from the header --------//
  //---------------------------------------------//
  const AuthHearder = AuthHearder && req.headers["authorization"];
  const token = AuthHearder.split(" ")[1];

  //-------------------------------------------//
  //---if there is no token send not found-----//
  //-------------------------------------------//
  if (token === null) return res.sendStatus(401);

  //---------------------------------------------------------//
  //---varify the token user if it has the right  secret-----//
  //---------------------------------------------------------//
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) {
      res.sendStatus(401);
    }
    //---------------------------------------------------------//
    //---if not just send the user info back to the route -----//
    //---------------------------------------------------------//
    req.user = user;
    next();
  });
}

module.exports.generateAccessToken = generateAccessToken;
module.exports.AuthenticatToken = AuthenticatToken;
