const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "../build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = "mongodb+srv://user:user@cluster0.g8ckmsk.mongodb.net/";

let Message = mongoose.model("Message", { name: String, message: String });

app.get("/messages_data", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

app.post("/messages_data", (req, res) => {
  let message = new Message(req.body);

  message.save((err) => {
    if (err) res.sendStatus(500);

    res.sendStatus(200);
  });
});

mongoose.connect(dbUrl, (err) => {
  console.log("mongo db connection", err);
});

const server = app.listen(3000, () => {
  console.log("server is listening on port", server.address().port);
});
