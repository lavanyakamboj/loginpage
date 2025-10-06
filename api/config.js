// config.js
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("MongoDB connected to user schema")
  }) 
.catch((err) => {
  console.log(err)
});

mongodb: module.exports = mongoose;
