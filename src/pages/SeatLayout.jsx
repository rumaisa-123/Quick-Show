import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const SeatLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = dummyShowsData.find((m) => m._id === id) || dummyShowsData[0];
  
  const [selectedSeats, setSelectedSeats] = useState(["A1", "A2"]);
  const [purchased, setPurchased] = useState(false);

  const seatList = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"];

  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div style={{ backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "40px", textAlign: "center" }}>
      <h1>{movie.title} - Select Seats</h1>
      
      {purchased ? (
        <div style={{ backgroundColor: "#18181b", border: "1px solid #22c55e", padding: "40px", borderRadius: "12px", maxWidth: "500px", margin: "40px auto" }}>
          <h2 style={{ color: "#22c55e", marginBottom: "10px" }}>Booking Confirmed!</h2>
          <p style={{ color: "#a1a1aa" }}>You have successfully purchased seats: {selectedSeats.join(", ")}</p>
          <button onClick={() => navigate("/my-bookings")} style={{ marginTop: "20px", backgroundColor: "#f43f5e", color: "#fff", border: "none", padding: "10px 24px", borderRadius: "20px", cursor: "pointer" }}>
            View My Bookings
          </button>
        </div>
      ) : (
        <div style={{ maxWidth: "600px", margin: "30px auto" }}>
          <div style={{ backgroundColor: "#27272a", height: "8px", borderRadius: "4px", marginBottom: "40px" }}></div>
          <p style={{ color: "#a1a1aa", fontSize: "12px", marginBottom: "30px" }}>SCREEN THIS WAY</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginBottom: "40px" }}>
            {seatList.map((seat) => (
              <button
                key={seat}
                onClick={() => toggleSeat(seat)}
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  backgroundColor: selectedSeats.includes(seat) ? "#f43f5e" : "#18181b",
                  color: "#fff"
                }}
              >
                {seat}
              </button>
            ))}
          </div>

          <div style={{ backgroundColor: "#18181b", padding: "20px", borderRadius: "12px", textAlign: "left" }}>
            <p>Selected Seats: <strong>{selectedSeats.join(", ") || "None"}</strong></p>
            <p style={{ fontSize: "18px", margin: "10px 0" }}>Total Amount: <strong>${selectedSeats.length * 49}</strong></p>
            <button
              disabled={selectedSeats.length === 0}
              onClick={() => setPurchased(true)}
              style={{
                backgroundColor: selectedSeats.length === 0 ? "#3f3f46" : "#f43f5e",
                color: "#fff",
                border: "none",
                padding: "12px 28px",
                borderRadius: "20px",
                cursor: selectedSeats.length === 0 ? "not-allowed" : "pointer",
                fontWeight: "bold",
                width: "100%",
                marginTop: "10px"
              }}
            >
              Checkout & Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatLayout;