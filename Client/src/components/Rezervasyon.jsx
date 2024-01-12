import React, { useState, useEffect } from "react";
import axios from "axios";
import ReservationForm from "./ReservationForm";
import ReservationCard from "./ReservationCard";

const API_ENDPOINT = "http://localhost:3001/reservation";

function Rezervasyon() {
  const [reservation, setReservation] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const [add, setAdd] = useState("Rezervasyon Ekle");

  useEffect(() => {
    axios
      .get(API_ENDPOINT)
      .then((res) => {
        if (res.data) {
          setReservation(res.data);
        }
      })
      .catch((error) => console.log(error));
  }, [reservation, add]);

  const addReservation = (newReservation) => {
    axios.post("http://localhost:3001/create", newReservation).then((res) => {
      if (res.data) {
        setReservation([...reservation, res.data]);
      }
    });
  };

  return (
    <div>
      <div className="resAdd">
        <button
          className="addButton"
          onClick={() => {
            setShowComponent(!showComponent);
            if (!showComponent) {
              setAdd("Kapat");
            } else {
              setAdd("Rezervasyon Ekle");
            }
          }}
        >
          {add}
        </button>
        {showComponent && <ReservationForm addReservation={addReservation} />}
      </div>
      <div className="container">
        <div className="row">
          <div className="card-container">
            {reservation.map((reservation, index) => (
              <ReservationCard key={index} reservation={reservation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rezervasyon;
