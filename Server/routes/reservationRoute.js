const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservationModel");

router.route("/create").post((req, res) => {
  const customerName = req.body.customerName;
  const reservationDate = req.body.reservationDate;
  const reservationDateQuit = req.body.reservationDateQuit;
  const reservationTime = req.body.reservationTime;
  const price = req.body.price;
  const day = req.body.day;
  const daily = req.body.daily;
  const newReservation = new Reservation({
    customerName,
    reservationDate,
    reservationDateQuit,
    reservationTime,
    price,
    day,
    daily,
  });
  newReservation.save();
});

router.route("/reservation").get((req, res) => {
  Reservation.find().then((foundReservations) => res.json(foundReservations));
});

module.exports = router;
