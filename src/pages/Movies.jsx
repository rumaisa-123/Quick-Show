import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const Movies = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = dummyShowsData.filter((m) =>
    m.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "30px 40px" }}>
      <h1 style={{ marginBottom: "20px" }}>All Movies ({dummyShowsData.length})</h1>
      
      <input
        type="text"
        placeholder="Search movies by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "12px 18px",
          marginBottom: "30px",
          borderRadius: "25px",
          border: "1px solid #27272a",
          backgroundColor: "#18181b",
          color: "#fff"
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {filteredMovies.map((movie) => (
          <div
            key={movie._id}
            onClick={() => navigate(`/movie/${movie._id}`)}
            style={{ backgroundColor: "#18181b", borderRadius: "12px", overflow: "hidden", cursor: "pointer" }}
          >
            <img src={movie.poster_path} alt={movie.title} style={{ width: "100%", height: "280px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>{movie.title}</h3>
              <p style={{ color: "#a1a1aa", fontSize: "12px" }}>{movie.genres.map((g) => g.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;