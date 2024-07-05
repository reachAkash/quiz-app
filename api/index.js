const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/auth.route");
const app = express();
const cors = require("cors");
require("dotenv").config();

// resolving cors
const corsOptions = {
  origin: ["http://localhost:5173", "https://quiz-app-akash.vercel.app/"],
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

//connecting mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connected successfully!"))
  .catch((err) => console.log(err));

//middleware to handle routes
app.use("/api", userRoutes);

// middleware for handling errors
app.use((error, req, res, next) => {
  const errorStatus = error.statusCode || 500;
  const errorMessage = error.message || "Internal Server Error";
  return res.status(errorStatus).json(errorMessage);
});

app.listen(process.env.PORT, () => {
  console.log("Server started at " + process.env.PORT);
});
