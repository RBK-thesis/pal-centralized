const express = require("express");
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const CR = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressUploader = require("express-fileupload");
const passport = require("passport");
// const GoogleConfig = require("./Routs/config");

// var GoogleStrategy = require("passport-google-oauth2").Strategy;

const app = express();
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());
app.use(expressUploader());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GoogleConfig.GoogleConfig.clientID,
//       clientSecret: GoogleConfig.GoogleConfig.clientSecret,
//       callbackURL: GoogleConfig.GoogleConfig.callbackURL,
//       passReqToCallback: true
//     },
//     (accessToken, refreshToken, profile, cb) => {
//       console.log("inside the call back");
//       console.log(profile.id);
//     }
//   )
// );

app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
// app.use(passport.initialize());
// app.use(passport.session());
//
app.use(cookieParser());

//------------- create the route server by redirecting to the routefolder -----------//
app.use(require("./Routs"));
// app.use(express.bodyParser());

//----------dont Write Your Routs here Write it inside the Rout Index.js------------//
app.post("*", (res, req) => {
  console.log("body: ", req.body);
  console.log("query: ", req.query);
});
//-----------------------the request to the main server route-----------------------//
app.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.sen("hiiiiiiiii");
});

//------------------------------- open the connection --------------------------------//
app.listen(port, async function() {
  try {
    // console.log(await CR.randomBytes(64).toString("hex"));
  } catch {}
  console.log(`listning on port ${port}`);
});
