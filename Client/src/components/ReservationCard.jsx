import React from "react";

function ReservationCard({
  reservation: {
    customerName,
    reservationDate,
    reservationDateQuit,
    reservationTime,
    day,
    price,
    daily,
  },
}) {
  return (
    <div className="card">
      <h3>{customerName}</h3>
      <p className="giris">
        Giriş Tarihi: {new Date(reservationDate).toLocaleDateString("tr-TR")}
      </p>
      <p className="giris">
        Çıkış Tarihi:{" "}
        {new Date(reservationDateQuit).toLocaleDateString("tr-TR")}
      </p>
      <p className="giris">Giriş Saati: {reservationTime}</p>
      <p>Gün: {day} </p>
      <p>Fiyat: {price} TL</p>
      <p>Günlük: {daily} TL</p>
    </div>
  );
}

export default ReservationCard;
