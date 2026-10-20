import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div>
          <h3 style={{ fontSize: "20px", color: "#fff", marginBottom: "10px" }}>
            <span style={{ color: "#f43f5e" }}>Quick</span>Show
          </h3>
          <p style={{ fontSize: "14px", color: "#a1a1aa", maxWidth: "300px" }}>
            Your ultimate platform for seamless movie ticket booking and entertainment updates.
          </p>
        </div>
        
        <div>
          <h4 style={{ color: "#fff", marginBottom: "10px" }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/movies" style={styles.link}>Movies</Link>
            <Link to="/favorite" style={styles.link}>Favorites</Link>
            <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>© 2026 QuickShow. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#09090b",
    color: "#a1a1aa",
    borderTop: "1px solid #27272a",
    padding: "40px 40px 20px",
    marginTop: "60px"
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    marginBottom: "30px"
  },
  link: {
    color: "#a1a1aa",
    textDecoration: "none",
    fontSize: "14px"
  },
  bottom: {
    textAlign: "center",
    borderTop: "1px solid #18181b",
    paddingTop: "20px",
    fontSize: "13px"
  }
};

export default Footer;