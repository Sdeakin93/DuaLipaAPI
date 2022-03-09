var fs = require("fs");
var data = fs.readFileSync("data.json");
var songs = JSON.parse(data);

const express = require("express");
const app = express();
const cors = require("cors");

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static("public"));
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/songs", alldata);
function alldata(request, response) {
  // Returns all information about the elements
  response.send(songs);
}
