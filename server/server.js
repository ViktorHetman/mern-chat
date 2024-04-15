import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () =>
  console.log(`The server is listening on the port ${PORT}`)
);
