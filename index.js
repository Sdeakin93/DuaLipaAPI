var fs = require("fs");
var data = fs.readFileSync("data.json");
var songs = JSON.parse(data);

const express = require("express");
const app = express();
const cors = require("cors");

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static("public"));
app.use(cors());

app.get("/songs", alldata);
function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}

app.get("/songs/:song/", searchSongs);
function searchSongs(request, response) {
  var word = request.params.song;
  word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  console.log(word);
  //console.log(elements[word]);
  if (songs[word]) {
    var reply = songs[word];
  } else {
    var reply = {
      status: "Not Found",
    };
  }
  console.log(reply.boil);
  response.send(reply);
}
