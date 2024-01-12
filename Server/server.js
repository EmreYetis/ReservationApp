const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use("/", require("./routes/reservationRoute"));

app.listen(3001, function () {
  console.log("Server running at http://localhost:3001/");
});
