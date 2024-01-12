const mongoose = require("mongoose");

const reservationSchema = {
  customerName: String,
  reservationDate: Date,
  reservationDateQuit: Date,
  reservationTime: String,
  price: Number,
  day: Number,
  daily: Number,
};

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
