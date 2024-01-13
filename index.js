const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// parser
app.use(express.json());
app.use(cors());

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// conection mongoose
mongoose
  .connect(uri)
  .then(() => console.log("connection success"))
  .catch((err) => console.log(err));

// api
app.get("/", async (req, res) => {
  res.send("server is running....");
});
app.listen(port, () => {
  console.log("server is running :", port);
});
