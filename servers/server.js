const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));

let messages = [
  { name: "Alex Mourinho", message: "good site" },
  { name: "Sara Parker", message: "greate ecxpeadd" },
];

app.get("/messages_data", (req, res) => {
  res.send(messages);
});

const server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
