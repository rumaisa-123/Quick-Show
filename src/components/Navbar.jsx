import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <span style={{ color: "#f43f5e" }}>Quick</span>Show
      </div>
      
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/movies" style={styles.link}>Movies</Link>
        <Link to="/favorite" style={styles.link}>Favorites</Link>
        <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {user ? (
          <>
            <span style={{ fontSize: "14px", color: "#d4d4d8" }}>Hi, {user.name}</span>
            <button onClick={() => setUser(null)} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <Link to="/login">
            <button style={styles.loginBtn}>Log In / Sign Up</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#09090b",
    borderBottom: "1px solid #27272a",
    color: "#fff"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "0.5px"
  },
  links: {
    display: "flex",
    gap: "30px"
  },
  link: {
    color: "#a1a1aa",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500"
  },
  loginBtn: {
    backgroundColor: "#f43f5e",
    color: "#fff",
    border: "none",
    padding: "8px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px"
  },
  logoutBtn: {
    backgroundColor: "transparent",
    color: "#f43f5e",
    border: "1px solid #f43f5e",
    padding: "6px 14px",
    borderRadius: "15px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "bold"
  }
};

export default Navbar;