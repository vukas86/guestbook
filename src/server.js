import express, { json } from "express";
const app = express();

app.use(json());

app.post("/api/submit", (req, res) => {
  const { name, msg } = req.body;

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
