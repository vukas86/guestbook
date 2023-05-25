import express from "express";
// import mysql from "mysql";
import { createConnection } from "mysql";

const app = express();

const connection = createConnection({
  host: "localhost3306",
  user: "root",
  password: "mxp@1511delije",
  database: "guestbook",
});

connection.connect((err) => {
  if (err) {
    console.error("Error to connect to MySQL database:", err);
    return;
  }
  console.log("Connected to MySql database");
});

app.use(express.json());

app.post("/api/messages", (req, res) => {
  const { name, message } = req.body;

  const sql = "INSERT INTO messages (name,message) VALUES(?, ?)";
  connection.query(sql, [name, message], (err, results) => {});
});
