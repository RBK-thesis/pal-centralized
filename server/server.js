const express = require("express");
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const CR = require("crypto");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressUploader = require("express-fileupload");

var app = express();
app.use(cors());
app.use(expressUploader());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

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
