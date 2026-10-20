import React from "react";
import { dummyBookingData } from "../assets/assets";

const MyBookings = () => {
  return (
    <div style={{ backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>My Bookings</h1>

      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#18181b", borderRadius: "8px", overflow: "hidden" }}>
        <thead>
          <tr style={{ backgroundColor: "#27272a", textAlign: "left" }}>
            <th style={{ padding: "15px" }}>Movie</th>
            <th style={{ padding: "15px" }}>Showtime</th>
            <th style={{ padding: "15px" }}>Seats</th>
            <th style={{ padding: "15px" }}>Amount</th>
            <th style={{ padding: "15px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyBookingData.map((booking, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #27272a" }}>
              <td style={{ padding: "15px" }}>{booking.show.movie.title}</td>
              <td style={{ padding: "15px" }}>{new Date(booking.show.showDateTime).toLocaleDateString()}</td>
              <td style={{ padding: "15px" }}>{booking.bookedSeats.join(", ")}</td>
              <td style={{ padding: "15px" }}>${booking.amount}</td>
              <td style={{ padding: "15px", color: booking.isPaid ? "#22c55e" : "#f59e0b", fontWeight: "bold" }}>
                {booking.isPaid ? "Paid" : "Unpaid"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;