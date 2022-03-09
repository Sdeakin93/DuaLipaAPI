var fs = require("fs");
var data = fs.readFileSync("data.json");
var songs = JSON.parse(data);
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}/songs`);
});

app.use(express.static("public"));
app.use(cors());
app.get("/songs", alldata);
function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}
