import express from "express";
// import mysql from "mysql";
import { createConnection } from "mysql";

const app = express();

const connection = createConnection({
  host: "localhost:3306",
  user: "root",
  password: "mxp@1511delije",
  database: "guestbook",
});

connection.connect((err) => {
  if (err) {
    console.error(`Error to connect to MySQL database:, ${err}`);
    return;
  }
  console.log("Connected to MySql database");
});

app.use(express.json());

app.post("/api/messages", (req, res) => {
  const { name, message } = req.body;

  const sql = "INSERT INTO messages (name,message) VALUES(?, ?)";
  connection.query(sql, [name, message], (err, results) => {
    if (err) {
      console.error(`Error inserting data into table:, ${err}`);
      res.status(500).json({ error: "An error occured" });
      return;
    }
    res.json({ message: "Data inserted succesfully" });
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on a port ${port}`);
});
