import React, { useState } from "react";
import axios from "axios";

function ReservationForm({ onReservationAdded }) {
  const [reservationData, setReservationData] = useState({
    customerName: "",
    reservationDate: "",
    reservationDateQuit: "",
    reservationTime: "",
    price: 0,
    daily: 0,
    day: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const dailyPrice = reservationData.price / reservationData.day;

    const newReservation = {
      ...reservationData,
      daily: dailyPrice,
    };

    axios
      .post("http://localhost:3001/create", newReservation)
      .then(() => {
        onReservationAdded();
        setReservationData({
          customerName: "",
          reservationDate: "",
          reservationDateQuit: "",
          reservationTime: "",
          price: 0,
          daily: 0,
          day: 0,
        });
      })
      .catch((error) => console.log(error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="customerName">Müşteri Adı:</label>
      <input
        type="text"
        id="customerName"
        value={reservationData.customerName}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            customerName: event.target.value.toUpperCase(),
          })
        }
        placeholder="Ad/Soyad"
        autoComplete="off"
        required
      />

      <label htmlFor="reservationDate">Giriş Tarihi:</label>
      <input
        type="date"
        id="reservationDate"
        value={reservationData.reservationDate}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            reservationDate: event.target.value,
          })
        }
        required
      />
      <label htmlFor="reservationDateQuit">Çıkış Tarihi:</label>
      <input
        type="date"
        id="reservationDateQuit"
        value={reservationData.reservationDateQuit}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            reservationDateQuit: event.target.value,
          })
        }
        required
      />

      <label htmlFor="reservationTime">Giriş Saati:</label>
      <input
        type="time"
        id="reservationTime"
        value={reservationData.reservationTime}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            reservationTime: event.target.value,
          })
        }
        required
      />

      <label htmlFor="price">Fiyat:</label>
      <input
        type="number"
        id="price"
        value={reservationData.price}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            price: event.target.value,
          })
        }
        placeholder="Fiyat"
        required
      />
      <label htmlFor="day">Gün:</label>
      <input
        type="number"
        id="day"
        value={reservationData.day}
        onChange={(event) =>
          setReservationData({
            ...reservationData,
            day: event.target.value,
          })
        }
        placeholder="Gün"
        required
      />

      <button
        type="submit"
        onClick={() => alert("Rezervasyon Başarıyla Kayıt Edildi!")}
      >
        Kaydet
      </button>
    </form>
  );
}

export default ReservationForm;
