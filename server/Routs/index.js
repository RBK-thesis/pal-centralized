const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const db = require("../../DataBase/db");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const Auth = require("../Auth/Auth");
const { check, validationResult } = require("express-validator");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//-------------------------------------------##### get all Post in specific type  #####------------------------------------------------------------//
// router.get("/articles/filter/:type", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   console.log("inside arcticles type api");
//   db.Post.find({ type: req.params.type }, (error, post) => {
//     if (error) {
//       res.status(500).send("an error accured while connecting to data");
//     }
//   })
//     .limit(9)
//     .then(post => {
//       res.status(201).send(post);
//     });
// });
// //-------------------------------------------##### get all Post Rout Nativ #####------------------------------------------------------------//
router.get("/articles", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  db.Post.find({}, (error, post) => {
    if (error) {
      res.status(500).send("an error accured while connecting to data");
    }
  })
    .limit(9)
    .then(post => {
      res.status(201).send(post);
    });
});

//--------------------------------------------#### get User Rout forNative #####------------------------------------------------------------//
router.get("/user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  //------------------------------------------//
  //----------- getting data for one user ----//
  //------------------------------------------//
  db.General.find(req.query, (error, user) => {
    if (error) {
      //-----------------------------------------//
      //--------------if an error accures -------//
      //-----------return server error-----------//
      res.status().send(" an error accured retrivong data");
    }
  }).then(user => {
    //-------------------------------------------//
    //---- getting all info if its a company ----//
    //-------------------------------------------//
    if (user[0].type === true) {
      var info = {
        id: user[0]["id"],
        Name: user[0]["Name"],
        email: user[0]["email"]
      };
      db.Company.find({ id: user[0]["id"] }, (error, data) => {
        if (error) {
          res.status(500).send(" an error accured retrivong data");
        }

        //-------------------------------------------//
        //------ getting all  company proile --------//
        //-------------------------------------------//
        info["followersList"] = data[0]["followersList"];
        info["postsList"] = data[0]["postsList"];
        info["archiveList"] = data[0]["archiveList"];
        info["logo"] = data[0]["logo"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["description"] = data[0]["description"];

        res.status(201).send({ user: [info] });
      });
    } else {
      //-------------------------------------------//
      //------ if type is a user get user nfo------//
      //-------------------------------------------//
      var info = {
        id: user[0]["id"],
        Name: user[0]["Name"],
        email: user[0]["email"]
      };
      db.User.find({ id: user[0]["id"] }, (error, data) => {
        if (error) {
          res.status(500).send(" an error accured retrivong data");
        }
        //-------------------------------------------//
        //------ getting  all  user   proile --------//
        //-------------------------------------------//

        info["birthDay"] = data[0]["birthDay"];
        info["address"] = data[0]["address"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["logo"] = data[0]["avatar"];
        info["educationLevel"] = data[0]["educationLevel"];
        info["major"] = data[0]["major"];
        info["mobileNumber"] = data[0]["mobileNumber"];
        info["gender"] = data[0]["gender"];
        info["favoriteList"] = data[0]["favoriteList"];
        info["followingList"] = data[0]["followingList"];
        info["notificationList"] = data[0]["notificationList"];
        info["tags"] = data[0]["tags"];
        info["cv"] = data[0]["cv"];

        res.status(201).send({ user: [info] });
      });
    }
  });
});

//------------------------------------------##### signIn Section #####------------------------------------------------//

router.post("/user/signIn", async (req, res) => {
  console.log("email", req.body.email, req.body.passowrd, "password");

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  // -----------------------------------------//
  // ----here we get the user from database ----//
  //------------------------------------------//
  var user = {};
  await db.General.findOne({ email: req.body.email }, (error, user) => {
    if (error) {
      res
        .status(500)
        .send("an Error Accured While Proccessing Data,  Try Again Later");
    }
  }).then(async user2 => {
    // console.log(user, "user");
    user = user2;
  });

  //--------------------------------//
  //--- check if the user Exist ----//
  //--------------------------------//
  if (user === null) {
    console.log("User Is not Registered");
    return res.status(400).send("cannot find the user");
  } else {
    //--------------------------------//
    //--- check Password Matching ----//
    //--------------------------------//

    try {
      console.log(await bcryptjs.hash(req.body.passowrd, 10));
      await bcryptjs.compare(req.body.passowrd, user.password, function(
        err,
        isMatch
      ) {
        if (err) {
          console.log("err");
        } else {
          console.log(isMatch, "isMatch");
          //--------------------------------//
          //--- the is Password Matching ---//
          //--------------------------------//
          // res.status(201).send("Success")//

          console.log("insid the compar");

          //-------------------------------------//
          //--------create a Token for user------//
          //------------- if the user match------//
          if (isMatch) {
            console.log(user.Name, "name");
            console.log(user.email, "email");

            const acsessToken = Auth.generateAccessToken({
              email: user.email,
              name: user.Name
            });
            res.status(201).send({ acsessToken: acsessToken, user: user });
          } else {
            //--------------------------------//
            //-- the is not Password Matching-//
            //--------------------------------//
            console.log("inside the compar2");
            res.status(401).send("check you passwors or user name");
          }
        }
      });
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log("catch");
    }
  }
  // console.log(DataBaseUser);

  //--------------------------------//
  //--- this is the request user----//
  //--------------------------------//
});

//------------------------------------------##### SignUp Section #####------------------------------------------------//
router.post(
  "/user/signUp",
  [check("email").isEmail(), check("passowrd").isLength({ min: 6 })],
  async (req, res, next) => {
    console.log(req.body.email, req.body.passowrd);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
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
      console.log("inside if error are not empty ");
      return res
        .status(422)
        .json({ errors: errors.array() })
        .end();
    }

    const hashpassword = "";
    const id = Date.now();
    // console.log(id);
    try {
      //-------------------------------//
      //----- hashing Password---------//
      //-------------------------------//

      await bcryptjs.hash(req.body.passowrd, 10).then(hassed => {
        console.log(hassed, "Hashed then");

        var hassedPass = hassed;
        // hashpassword = hassed;
        // console.log(hashpassword, "hhhhh");
        //--------------------------------------------------//
        //--saving User To DataBase with Hashed Password ---//
        //--------------------------------------------------//

        db.User.findOne({ email: req.body.email }, (error, user) => {
          if (error) {
            console.log("email is Exist");
            res.status(500).send("An Error Accured During Processing Data ");
          }
        }).then(async user => {
          //-----------------------------------------------------//
          //--------if the user email exist ---------------------//
          //--------then tell it to sing up wit another mail-----//
          //-----------------------------------------------------//
          console.log(user, "user");

          if (user !== null) {
            console.log("user  exist");
            res.status(404).send("user email is already exist ");
          } else {
            console.log(hassedPass, "hassedPass");

            db.General.create(
              {
                Name: req.body.name,
                id: id,
                type: req.body.type,
                email: req.body.email,
                password: hassedPass
              },
              (error, result) => {
                //--------------------------------------------------//
                //----------------- If User did not saved ----------//
                //----------------- then error message -------------//
                //--------------------------------------------------//
                if (error) {
                  res
                    .status(500)
                    .send("User is Not Saved .. PLZ Try again Later");
                  res.end();
                }
                if (result) {
                  console.log(result);
                  console.log(result, "result");
                  const acsessToken = Auth.generateAccessToken({
                    email: req.body.email,
                    name: req.body.Name
                  });
                  return res
                    .status(201)
                    .send({
                      acsessToken: acsessToken,
                      user: {
                        id: id,
                        Name: req.body.Name,
                        email: req.body.email,
                        type: req.body.type
                      }
                    })
                    .end();
                }
              }
            );
          }
        });
      });
      //// after Hasing we will Insert A new User to Users///////
    } catch {
      //--------------------------------//
      //-An Error Accurede while cheking-//
      //--------------------------------//
      console.log(req.body.passowrd, "passsword");
      res
        .status(500)
        .send("An Error has Accured While Saving Data Plz Try Again")
        .end();
    }
  }
);

module.exports = router;
