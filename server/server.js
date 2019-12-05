const express = require("express");
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
app.listen(port, function() {
  console.log("Example app listening on port 3004!");
});
