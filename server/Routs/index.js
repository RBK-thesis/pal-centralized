const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Auth = require("../Auth/Auth");
const { check, validationResult } = require("express-validator");

router.post(
  "/user/signUp",
  [check("email").isEmail(), check("password").isLength({ min: 6 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    //------------------------------------------------------//
    //------if the email or password is as we want this-----//
    //------is the error that will be shown-----------------//
    //----------- --------{---------------------------------//
    //---------------------- "errors": [{-------------------//
    //---------------------- "location": "body",------------//
    //------------------------ "msg": "Invalid value",------//
    //-------------------------  "param": "username"--------//
    //---------------------- }]-----------------------------//
    //---------------------}--------------------------------//

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    try {
      //-------------------------------//
      //----- hashing Password---------//
      //--------------------------------//
      const hashpassword = await bcryptjs.hash(req.body.passowrd, 10);
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log(req.body.data, "passsword");
      res.status(500).send();
    }

    //--------------------------------------------------//
    //--saving User To DataBase with Hashed Password ---//
    //--------------------------------------------------//

    var DataBaseUser;
    //-|------------------------------------------------//
    //-|--> do the saving Function and send result -----//
    //------------if user is saved generate a token ----//
    //--------------------------------------------------//

    //------------------------------------//
    //--------create a Token for user-----//
    //------------------------------------//
    const acsessToken = Auth.generateAccessToken(DataBaseUser);
    res.json({ acsessToken });

    //-------------------------------------------//
    //-------------if user is not saved ---------//
    //------------return a 500 to server --------//
  }
);

router.post("/user/signIn", async (req, res, next) => {
  console.log("insde the post");

  // -----------------------------------------//
  // ----here we get the user to database ----//
  //------------------------------------------//
  const DataBaseUser = {
    username: "req.body.username",
    passowrd: "req.body.passowrd"
  };

  //--------------------------------//
  //--- this is the request user----//
  //--------------------------------//

  const user2 = {
    username: "req.body.username",
    passowrd: "req.body.passowrd"
  };

  //--------------------------------//
  //--- check if the user Exist ----//
  //--------------------------------//
  if (DataBaseUser === null) {
    console.log("inside the finde method from data base if he did not find it");
    res.status(400).send("cannot find the user");
  }

  //--------------------------------//
  //--- check Password Matching ----//
  //--------------------------------//

  try {
    const hashpassword = await bcryptjs.hash("req.body.passowrd", 10);

    if (await bcryptjs.compare(user2.passowrd, hashpassword)) {
      //--------------------------------//
      //--- the is Password Matching ---//
      //--------------------------------//
      console.log("insi the compar");
      res.status(201).send("Success");

      //--------------------------------//
      //--------create a Token for user----//
      //------------------------------//
      const acsessToken = Auth.generateAccessToken(DataBaseUser);
      res.json({ acsessToken });
    } else {
      //--------------------------------//
      //-- the is not Password Matching-//
      //--------------------------------//
      console.log("insi the compar2");
      res.status(401).send("check you passwors or user name");
    }
  } catch {
    //--------------------------------//
    //-An Error Accurede while cheking-//
    //--------------------------------//
    console.log(req.body.data, "passsword");
    res.status(500).send();
  }
});

module.exports = router;
