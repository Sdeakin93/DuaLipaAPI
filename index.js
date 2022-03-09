var fs = require("fs");
var data = fs.readFileSync("data.json");
var songs = JSON.parse(data);
const express = require("express");
const app = express();

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static("public"));
app.get("/songs", alldata);
function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}
