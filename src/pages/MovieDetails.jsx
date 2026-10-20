import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = dummyShowsData.find((m) => m._id === id) || dummyShowsData[0];

  return (
    <div style={{ backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        <img src={movie.poster_path} alt={movie.title} style={{ width: "280px", borderRadius: "12px" }} />
        <div style={{ flex: "1", maxWidth: "600px" }}>
          <span style={{ backgroundColor: "#f43f5e", padding: "4px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
            {movie.original_language.toUpperCase()}
          </span>
          <h1 style={{ fontSize: "40px", margin: "15px 0" }}>{movie.title}</h1>
          <p style={{ color: "#a1a1aa", marginBottom: "15px" }}>
            ★ {movie.vote_average} Rating | {movie.runtime} mins | {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p style={{ color: "#d4d4d8", lineHeight: "1.6", marginBottom: "30px" }}>{movie.overview}</p>

          <button
            onClick={() => navigate(`/movie/${movie._id}/2025-07-24`)}
            style={{
              backgroundColor: "#f43f5e",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px"
            }}
          >
            Buy Tickets
          </button>
        </div>
      </div>

      <h2 style={{ marginTop: "50px", marginBottom: "20px" }}>Cast</h2>
      <div style={{ display: "flex", gap: "20px", overflowX: "auto", paddingBottom: "10px" }}>
        {movie.casts.map((cast, index) => (
          <div key={index} style={{ backgroundColor: "#18181b", padding: "10px", borderRadius: "8px", width: "130px", textAlign: "center" }}>
            <img src={cast.profile_path} alt={cast.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }} />
            <p style={{ fontSize: "13px", marginTop: "10px" }}>{cast.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;