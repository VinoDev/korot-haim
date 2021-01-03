import express from "express";

import { printRequest, accessControlAllowOrigin } from "./middleware";
const app = express();

app.use(accessControlAllowOrigin);
app.use(express.json());

app.post("/", printRequest, function (req, res) {
  res.send("Hello World");
});

export default app;