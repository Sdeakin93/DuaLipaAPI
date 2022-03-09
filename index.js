var fs = require("fs");
var data = fs.readFileSync("data.json");
var songs = JSON.parse(data);
const express = require("express");
const app = express();
const cors = require("cors");

process.env.PORT || port;

app.use(express.static("public"));
app.use(cors());
app.get("/songs", alldata);
function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}
