var fs = require("fs");

// json file with the data
var data = fs.readFileSync("data.json");

var songs = JSON.parse(data);
const express = require("express");
const app = express();

// To solve the cors issue
const cors = require("cors");

app.listen(process.env.PORT, () => console.log("Server Start at the Port"));

app.use(express.static("public"));
app.use(cors());

// when get request is made, alldata() is called
app.get("/songs", alldata);

function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}

app.get("/songs/:song/", searchSong);

function searchSong(request, response) {
  var word = request.params.song;
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

  if (songs[word]) {
    var reply = songs[word];
  } else {
    var reply = {
      status: "Not Found",
    };
  }

  response.send(reply);
}
