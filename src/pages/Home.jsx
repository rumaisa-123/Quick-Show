import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyShowsData } from "../assets/assets";

const Home = () => {
  const navigate = useNavigate();
  const featured = dummyShowsData[0];

  return (
    <div style={styles.container}>
      {/* Featured Banner */}
      <div
        style={{
          ...styles.hero,
          backgroundImage: `linear-gradient(to right, rgba(9,9,11,0.95), rgba(9,9,11,0.4)), url(${featured.backdrop_path})`
        }}
      >
        <h1 style={{ fontSize: "44px", margin: "10px 0" }}>{featured.title}</h1>
        <p style={{ color: "#a1a1aa", fontSize: "14px", marginBottom: "15px" }}>
          {featured.genres.map((g) => g.name).join(" | ")} | {featured.release_date.split("-")[0]} | {featured.runtime} mins
        </p>
        <p style={{ maxWidth: "550px", color: "#d4d4d8", marginBottom: "25px", lineHeight: "1.5" }}>
          {featured.overview}
        </p>
        <button onClick={() => navigate(`/movie/${featured._id}`)} style={styles.primaryBtn}>
          Explore Movie →
        </button>
      </div>

      {/* Grid showing initial set of movies with Explore More button */}
      <div style={styles.headerFlex}>
        <h2>Now Showing</h2>
        <button onClick={() => navigate("/movies")} style={styles.secondaryBtn}>
          Explore All Movies →
        </button>
      </div>

      <div style={styles.grid}>
        {dummyShowsData.slice(0, 6).map((movie) => (
          <div key={movie._id} onClick={() => navigate(`/movie/${movie._id}`)} style={styles.card}>
            <img src={movie.poster_path} alt={movie.title} style={styles.cardImg} />
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

const styles = {
  container: { backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "20px 40px" },
  hero: { backgroundSize: "cover", backgroundPosition: "center", borderRadius: "16px", padding: "60px 40px", minHeight: "360px", display: "flex", flexDirection: "column", justifyContent: "center" },
  primaryBtn: { backgroundColor: "#f43f5e", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "25px", cursor: "pointer", fontWeight: "bold", width: "fit-content" },
  secondaryBtn: { backgroundColor: "#27272a", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "20px", cursor: "pointer", fontSize: "14px" },
  headerFlex: { display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", marginBottom: "20px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
  card: { backgroundColor: "#18181b", borderRadius: "12px", overflow: "hidden", cursor: "pointer" },
  cardImg: { width: "100%", height: "280px", objectFit: "cover" }
};

export default Home;