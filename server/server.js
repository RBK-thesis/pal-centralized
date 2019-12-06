const express = require("express");
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const CR = require("crypto");
const cookieParser = require("cookie-parser");

var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//------------- create the route server by redirecting to the routefolder -----------//
app.use(require("./Routs"));
//----------dont Write Your Routs here Write it inside the Rout Index.js------------//

//-----------------------the request to the main server route-----------------------//
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.send("hhi");
});

//------------------------------- open the connection --------------------------------//
app.listen(port, async function() {
  try {
    // console.log(await CR.randomBytes(64).toString("hex"));
  } catch {}
  console.log(`listning on port ${port}`);
});
