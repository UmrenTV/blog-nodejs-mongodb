const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config(); // this is shorthand for the above two lines
require("./config/dbConnect");
const app = express();

// middlewares
// routes
// error handlers middleware
// listen to server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
