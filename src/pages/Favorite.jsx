import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const Favorite = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h1 style={{ marginBottom: "20px" }}>Your Favorites</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {dummyShowsData.slice(0, 3).map((movie) => (
          <div key={movie._id} style={{ backgroundColor: "#18181b", borderRadius: "12px", overflow: "hidden" }}>
            <img src={movie.poster_path} alt={movie.title} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>{movie.title}</h3>
              <button
                onClick={() => navigate(`/movie/${movie._id}`)}
                style={{ backgroundColor: "#f43f5e", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "15px", cursor: "pointer", fontSize: "12px" }}
              >
                Book Tickets
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;