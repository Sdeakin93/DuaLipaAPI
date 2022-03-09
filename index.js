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
  response.send(songs);
}

app.get("/songs/:song/", searchSongs);

function searchSongs(request, response) {
  var word = request.params.songs;
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
