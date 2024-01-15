const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require("./routes/v1/authentication");

applyMiddleware(app);

app.use(authRoutes);

app.get("/health", async (req, res) => {
  res.send("server is running....");
});

app.all("*", async (req, res, next) => {
  const error = new Error(`the request url is invalid: [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`mongoose explor Server is running on port ${port}`);
  });
};
main();
