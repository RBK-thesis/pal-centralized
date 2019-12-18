const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const db = require("../../DataBase/db");
const bodyParser = require("body-parser");
// const multer = require("multer");
const path = require("path");
const searchApi = require("../../API/search");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const Auth = require("../Auth/Auth");
const { check, validationResult } = require("express-validator");
// const EmailSender = require("../mail");
// const formidableMiddleware = require("express-formidable");
// app.use(formidableMiddleware());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

// const Storage = multer.diskStorage({
//   destination(req, file, callback) {
//     console.log(req.body, "file");
//     callback(null, "./upload/");
//   },
//   filename(req, file, callback) {
//     console.log(file, "fil2e");

//     callback(null, Date.now() + file.originalname);
//   }
// });

// const upload = multer({ storage: Storage });

//--------------------------------Google passport Auth ---------------------------------------------------//

router.get(
  "/user/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get(
  "/user/google/redirect",
  passport.authenticate("google" /*,{ failureRedirect: "/login"}*/),
  function(req, res) {
    console.log(req.user, " redirect rout ");

    const acsessToken = Auth.generateAccessToken({
      email: req.user.email,
      name: req.user.Name
    });
    UserInfo = {
      Name: req.user.Name,
      email: req.user.email,
      type: req.user.type,
      id: req.user.id
    };
    res.send({ acsessToken: acsessToken, user: UserInfo }).end();
  }
);

//----------------------## Create a new Post----------------------------------------------//

//-------------------------------------------------------------//
//--------------------insert a new post to articals -----------//
//-------------------------------------------------------------//
router.post("/articles/addPosts", (req, res) => {
  //-------------------------------------------------------------------------//
  //---------- takes object Post as (post and) , company id as (comID) ------//
  //-------------------------------------------------------------------------//
  var post = res.body.post;
  var comID = res.body.comID;
  //-------------------------------------------//
  //---------------add an ID to post-----------//
  //-------------------------------------------//
  post["id"] = Date.now();
  //--------------------------------------------//
  //-------insert the post with its id----------//
  //--------------------------------------------//
  db.Post.create(post)
    .then(result => {
      //-------------------------------------------------//
      //----------------- if created return 201----------//
      //-------------------------------------------------//

      EmailSender(comID, post);
      //-------------------------------------------------//
      //---------Sending Email to all follwers ----------//
      //-------------------------------------------------//
      res
        .status(201)
        .send("Sucess")
        .end();
    })
    .catch(error => {
      //-------------------------------------------------//
      //------------- if not created return 201----------//
      //-------------------------------------------------//
      res

        .status(500)
        .send("An Error Has Occurred during processing data")
        .end();
    });
});

//------------------------------------------Update /Delete - post ------------------------------------------------------//

router.post("/articles/updatePost", (req, res) => {
  //----------------------------------------//
  //------------delete operation------------//
  //----------------------------------------//
  if (req.body.op === "delete") {
    db.post
      .deleteOne({ id: req.body.id })
      .then(result => {
        res
          .status(201)
          .send("Successfully Deleted")
          .end();
      })
      .catch(error => {
        res.status(500).send("An Error Has Occurred during processing data");
      });
  }
  //----------------------------------------//
  //------------update operation------------//
  //----------------------------------------//
  if (req.body.op === "update") {
    db.updateOne({ id })
      .then(result => {
        res
          .status(201)
          .send("Successfully updated")
          .end();
      })
      .catch(error => {
        res
          .status(500)
          .send("An Error Has Occurred during processing data")
          .end();
      });
  }
});

//----------------------- Update Company info -------------------------------------------//

router.post("user/updateProfile", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //------------------------------------------------//
  // ---------------- if type is a user-------------//
  //------------------------------------------------//
  if (!req.body.type) {
    var UserInfo = {
      gender: req.body.gender,
      birthDay: req.body.birthDay,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      major: req.body.major,
      educationLevel: req.body.educationLevel,
      avatar: req.body.avatar,
      cv: req.body.cv
    };
    db.User.updateOne({ id: req.body.id }, UserInfo)
      .then(result => {
        req
          .status(201)
          .send("Updated sucessfuly")
          .end();
      })
      .catch(error => {
        res
          .status(500)
          .send("An Error Accured During Processing")
          .end();
      });
  }
  //---------------------------------------------------//
  // ---------------- if type is a Company-------------//
  //---------------------------------------------------//
  else {
    var Company = {
      description: req.body.description,
      logo: req.body.logo,
      twitterLink: req.body.twitterLink,
      linkedinLink: req.body.linkedinLink,
      otherLink: req.body.otherLink,
      mobileNumber: req.body.mobileNumber
    };
    db.Company.updateOne({ id: req.body.id })
      .then(reslt => {
        res
          .status(201)
          .send("User Is Saved")
          .end();
      })
      .catch(err => {
        res
          .status(201)
          .send("User Is not Saved")
          .end();
      });
  }
});

//----------------------------------##### Processing file and picture #####-----------------------------------------------//
router.post("/user/upload", (req, res) => {
  console.log(req.file, "jjjj");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  if (req.body) {
    // var d = req.body;
    console.log(req.files, "file111");
    console.log(req.body, "file111");
    console.log(req.body.photo, "file111");

    // var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");

    //   require("fs").writeFile("out.jpeg", base64Data, "base64", function(err) {
    //     console.log(err);
    //   });
    //   console.log("no file Uploaded");
    //   // console.log(req.body.fileType, "hiiii");
    // } else {
    //   console.logo("we have a file");
  }
});

//---------------------------------Update Favorit List to User-----------------------------------------------------//
router.post("/user/favoriteList", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  var usrtid = req.body.userID;
  var postid = req.body.postID;

  //------------------------------------------------------------//
  //--------- select Uer and push the item to its --------------//
  //-------------------- favorit list --------------------------//
  //------------------------------------------------------------//
  db.User.updateOne(
    { id: usrtid },
    { $push: { favoriteList: postid } },
    (error, result) => {
      //----------------------------------------------------------//
      //--------- cheks if the updating went right ---------------//
      //----------------------------------------------------------//
      if (error) {
        res
          .status(500)
          .send("An Error Accured during Processing")
          .end();
      } else {
        res
          .status(201)
          .send("Updated Sucessfuly")
          .end();
      }
    }
  );
});
//------------------------------------ get Favorite -------------------------------------------------------------//

router.get("/articles/favoriteList", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  //-----------------------------------------------------//
  //--------------get the favorite list from ------------//
  //-------------- User Profile -------------------------//
  //-----------------------------------------------------//

  var userID = req.query.id;
  db.User.findOne({ id: userID })
    .select("favoriteList")
    .then(result => {
      //-----------------------------------------------------//
      //---find the user and the return the list ------------//
      //-----------------------------------------------------//
      //-----------------------------------------------------//
      db.Post.find(
        {
          id: {
            $in: result.favoriteList
          }
        },
        (error, posts) => {
          if (error) {
            //----------------------------------------------------------//
            //--------------- rong data access respnds with error--------//
            //----------------------------------------------------------//
            res
              .status(500)
              .send("an Error Accured While Processing Data")
              .end();
          } else {
            //----------------------------------------------------------//
            //--------------- return all favirot post info--------------//
            //----------------------------------------------------------//
            res
              .status(201)
              .send(posts)
              .end();
          }
        }
      ).select("id link deadLine title logo  major");
      // db.Post.find{}
    })
    .catch(() => {
      //----------------------------------------------------------------------------//
      //-------------------------if somthing went rong in getting user info --------//
      //----------------------------------------------------------------------------//
      res
        .status(500)
        .send("an Error Accured While Proccessing Data")
        .end();
    });
});
//---------------------------Get API Values ----------------------------------------------------------------------//
router.get("/articles/API", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  console.log(searchApi.EducationalLevel);
  res
    .send({
      Major: searchApi.majors,
      Types: searchApi.types,
      EducationalLevel: searchApi.EducationalLevel
    })
    .status(2001)
    .end();
});

//--------------------------------### getting Info by Search #####------------------------------------------------//
router.get("/articles/search", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  var param = req.query;
  var keys = Object.keys(param);
  //---------------------------------------- Search using all avaliable options---------------------------//

  if (keys.includes("enterQuery") && keys.length == 3) {
    console.log(req.query, "query");
    searchApi.search(
      req.query.type,
      req.query.major,
      result => {
        console.log("firt! ", result);
        res
          .status(201)
          .send(result)
          .end();
      },
      req.query.enterQuery
    );
  } else if (keys.length == 2 && keys.includes("enterQuery")) {
    if (keys.includes("major")) {
      searchApi.searchMajor(req.query.major, result => {
        var SearchResult = searchApi.seatchTitleArr(
          result,
          req.query.enterQuery
        );
        res
          .status(201)
          .send(SearchResult)
          .end();
      });
    } else {
      if (keys.includes("type")) {
        searchApi.searchType(req.query.type, result => {
          var SearchResult = searchApi.seatchTitleArr(
            result,
            req.query.enterQuery
          );
          res
            .status(201)
            .send(SearchResult)
            .end();
        });
      }
    }
  } else if (
    keys.length === 2 &&
    req.query.hasOwnProperty("major") &&
    req.query.hasOwnProperty("type")
  ) {
    // console.log("string  ", typeof req.query, req.query.major);
    searchApi.search(req.query.type, req.query.major, result => {
      res
        .status(201)
        .send(result)
        .end();
    });
  } else if (keys.length === 1) {
    if (keys[0] === "major") {
      searchApi.searchMajor(req.query.major, result => {
        res
          .status(201)
          .send(result)
          .end();
      });
    } else if (keys[0] === "enterQuery") {
      searchApi.seatchTitle(req.query.enterQuery, result => {
        res
          .status(201)
          .send(result)
          .end();
      });
    } else if (keys[0] === "type") {
      searchApi.searchType(req.query.type, result => {
        res
          .status(201)
          .send(result)
          .end();
      });
    }
  }
});

//-------------------------------------#### get filtered Articals ## -------------------------------------------------
router.get("/articles/filtered", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  console.log("req", req.query);
  db.Post.find(req.query, (error, post) => {
    if (error) {
      res.status(500).send("an error accured while connecting to data");
    }
  }).then(post => {
    res.status(201).send(post);
  });
});
//-------------------------------------------##### get all Post Rout Nativ #####------------------------------------------------------------//
router.get("/articles", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (Object.keys(req.query).length !== 0) {
    db.Post.find({ comId: req.query.id }, (error, post) => {
      if (error) {
        res.status(500).send("an error accured while connecting to data");
      }
    }).then(post => {
      res.status(201).send(post);
    });
  } else  {
    db.Post.find({}, (error, post) => {
      if (error) {
        res.status(500).send("an error accured while connecting to data");
      }
    }).then(post => {
      res.status(201).send(post);
    });
  }
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
  console.log("n the rout ", req.body.mail, req.body.passowrd);
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
        .send("an Error Accured While Proccessing Data,  Try Again Later")
        .end();
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
    return res.status(400).send("User Is not Found Please Register");
  } else {
    //--------------------------------//
    //--- check Password Matching ----//
    //--------------------------------//

    try {
      await bcryptjs.compare(req.body.passowrd, user.password, function(
        err,
        isMatch
      ) {
        if (err) {
          console.log("err", err);
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
            if (user.type === false) {
              db.User.create({ id: user.id }, (error, result) => {
                if (error) {
                  console.log(error);
                } else {
                  console.log(result);
                }
              });
            }
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
    const idm = Date.now();
    if (!errors.isEmpty()) {
      console.log("inside if error are not empty ");
      return res
        .status(422)
        .json({ errors: errors.array() })
        .end();
    }

    const hashpassword = "";

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
          console.log(user, "user-----------------------------");

          if (user !== null) {
            console.log("user  exist");
            res.status(404).send("user email is already exist ");
          } else {
            console.log("adding user to data base ");
            db.General.create(
              {
                Name: req.body.name,
                id: idm,
                type: req.body.type,
                email: req.body.email,
                password: hassedPass
              },
              (error, result) => {
                console.log("did add the user ");

                //--------------------------------------------------//
                //----------------- If User did not saved ----------//
                //----------------- then error message -------------//
                //--------------------------------------------------//
                if (error) {
                  console.log(error);
                  res
                    .status(500)
                    .send("User is Not Saved .. PLZ Try again Later");
                  res.end();
                }
                if (result) {
                  //-----------------------------------------------------//
                  //--------------- ADD USER PROFILR REDCORD-------------//
                  //-----------------------------------------------------//
                  if (!result.type) {
                    console.log(result, "result");
                    db.User.create({ id: result["id"] }).then(() => {
                      console.log("added ");
                      const acsessToken = Auth.generateAccessToken({
                        email: result["email"],
                        name: result["Name"]
                      });

                      return res
                        .status(201)
                        .send({
                          acsessToken: acsessToken,
                          user: {
                            id: idm,
                            Name: result["Name"],
                            email: result["email"],
                            type: result["type"]
                          }
                        })
                        .end();
                    });
                  } else {
                    console.log("inside try result2");

                    db.Company.create({ id: result["id"] });
                  }
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
