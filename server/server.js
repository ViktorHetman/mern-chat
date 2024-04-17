import express from "express";
import * as dotenv from "dotenv";
import cookieParser from "cookie-parser";

import router from "./routes/index.js";
import { connectToMongoDB } from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(PORT, () => {
  connectToMongoDB(),
    console.log(`The server is listening on the port ${PORT}`);
});
