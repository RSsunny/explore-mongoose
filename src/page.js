const express = require("express");
const applyMiddleware = require("./middleware/applyMiddleware");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const collection = process.env.DB_NAME;

const authRoutes = require("./router/v1/authentication/index");
const serviceRoute = require("./router/v1/service");
const globalErrorHandler = require("./utils/globalErrorhandlar");

applyMiddleware(app);

app.use(authRoutes);
app.use(serviceRoute);

app.get("/health", async (req, res) => {
  res.send("server is running....");
});

app.all("*", async (req, res, next) => {
  const error = new Error(`the request url is invalid: [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`mongoose explor Server is running on port ${port}`);
  });
};
main();
