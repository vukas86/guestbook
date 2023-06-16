const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());

let messages = [
  {
    name: "Alex Mourinho",
    message:
      "Tingling of the spine across the centuries rich in heavy atoms quasar from which we spring trillion. A mote of dust suspended in a sunbeam muse about take root and flourish the only home we've ever known hearts of the stars a very small stage in a vast cosmic arena. ",
  },
  {
    name: "Sara Parker",
    message:
      "Dispassionate extraterrestrial observer not a sunrise but a galaxyrise vanquish the impossible ship of the imagination something incredible is waiting to be known Sea of Tranquility and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
  },
];

app.get("/messages_data", (req, res) => {
  res.send(messages);
});

app.post("/messages_data", (req, res) => {
  messages.push(req.body);
  res.sendStatus(200);
});

const server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
