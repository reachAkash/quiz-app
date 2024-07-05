const express = require("express");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect()
  .then(() => console.log("database connected successfully!"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log("Server started at " + process.env.PORT);
});
