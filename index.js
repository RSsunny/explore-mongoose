const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// parser
app.use(express.json());
app.use(cors());

// api

app.listen(port, () => {
  console.log("server is running :", port);
});