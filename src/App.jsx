import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

const dummyShowsData = [
  {
    _id: "324544",
    title: "In the Lost Lands",
    overview: "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power.",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [{ name: "Action" }, { name: "Fantasy" }],
    runtime: 102,
    vote_average: 6.4,
    original_language: "en"
  },
  {
    _id: "1232546",
    title: "Until Dawn",
    overview: "Clover and her friends head into the remote valley where she vanished in search of answers, stalked by a masked killer.",
    poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [{ name: "Horror" }, { name: "Mystery" }],
    runtime: 103,
    vote_average: 6.8,
    original_language: "en"
  },
  {
    _id: "552524",
    title: "Lilo & Stitch",
    overview: "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [{ name: "Family" }, { name: "Comedy" }],
    runtime: 108,
    vote_average: 7.1,
    original_language: "en"
  },
  {
    _id: "668489",
    title: "Havoc",
    overview: "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld.",
    poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    genres: [{ name: "Action" }, { name: "Crime" }],
    runtime: 107,
    vote_average: 6.5,
    original_language: "en"
  },
  {
    _id: "950387",
    title: "A Minecraft Movie",
    overview: "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled into the Overworld.",
    poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [{ name: "Family" }, { name: "Adventure" }],
    runtime: 101,
    vote_average: 6.5,
    original_language: "en"
  },
  {
    _id: "575265",
    title: "Mission: Impossible - The Final Reckoning",
    overview: "Ethan Hunt and team continue their search for the terrifying AI known as the Entity.",
    poster_path: "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genres: [{ name: "Action" }, { name: "Thriller" }],
    runtime: 170,
    vote_average: 7.4,
    original_language: "en"
  },
  {
    _id: "986056",
    title: "Thunderbolts*",
    overview: "Seven disillusioned castoffs must embark on a dangerous mission that forces them to confront their pasts.",
    poster_path: "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genres: [{ name: "Action" }, { name: "Sci-Fi" }],
    runtime: 127,
    vote_average: 7.4,
    original_language: "en"
  },
  {
    _id: "108419",
    title: "Avatar: Fire and Ash",
    overview: "Jake Sully and Neytiri encounter the Ash People, an aggressive Na'vi clan dwelling near volcanic ecosystems.",
    poster_path: "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
    genres: [{ name: "Sci-Fi" }, { name: "Adventure" }],
    runtime: 190,
    vote_average: 8.2,
    original_language: "en"
  },
  {
    _id: "838209",
    title: "Exhumed",
    overview: "An excavation crew unlocks a crypt buried beneath an ancient cathedral, releasing a dark entity.",
    poster_path: "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
    genres: [{ name: "Horror" }],
    runtime: 98,
    vote_average: 6.9,
    original_language: "en"
  },
  {
    _id: "991002",
    title: "Neon Horizon",
    overview: "In a dystopian cyberpunk megacity, a rogue hacker uncovers a subterranean network of AIs.",
    poster_path: "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
    genres: [{ name: "Sci-Fi" }, { name: "Action" }],
    runtime: 115,
    vote_average: 7.8,
    original_language: "en"
  },
  {
    _id: "772101",
    title: "Velocity",
    overview: "An underground street racer gets entangled in an international heist across three European capitals.",
    poster_path: "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
    genres: [{ name: "Action" }, { name: "Thriller" }],
    runtime: 110,
    vote_average: 6.3,
    original_language: "en"
  },
  {
    _id: "643110",
    title: "Shadow Realm",
    overview: "A scholar accidentally translates a forbidden manuscript, opening doors to an ancient dimension.",
    poster_path: "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [{ name: "Fantasy" }, { name: "Mystery" }],
    runtime: 124,
    vote_average: 7.0,
    original_language: "en"
  }
];

const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    show: { movie: dummyShowsData[0], showDateTime: "2025-06-30T02:30:00.000Z" },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: true
  }
];

const Navbar = ({ user, setUser }) => (
  <nav style={styles.nav}>
    <div style={styles.logo}><span style={{ color: "#f43f5e" }}>Quick</span>Show</div>
    <div style={styles.links}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/movies" style={styles.link}>Movies</Link>
      <Link to="/favorite" style={styles.link}>Favorites</Link>
      <Link to="/my-bookings" style={styles.link}>My Bookings</Link>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      {user && <span style={{ fontSize: "14px", color: "#d4d4d8" }}>Hi, {user.name}</span>}
      <Link to="/login">
        <button style={styles.loginBtn}>{user ? "Logout" : "Log In / Sign Up"}</button>
      </Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2026 QuickShow. All rights reserved.</p>
  </footer>
);

const Home = () => {
  const navigate = useNavigate();
  const featured = dummyShowsData[0];

  return (
    <div style={styles.container}>
      <div style={{ ...styles.hero, backgroundImage: `linear-gradient(to right, rgba(9,9,11,0.95), rgba(9,9,11,0.4)), url(${featured.backdrop_path})` }}>
        <h1 style={{ fontSize: "42px", margin: "10px 0" }}>{featured.title}</h1>
        <p style={{ color: "#a1a1aa", fontSize: "14px", marginBottom: "15px" }}>
          {featured.genres.map(g => g.name).join(" | ")} | {featured.runtime} mins
        </p>
        <p style={{ maxWidth: "500px", color: "#d4d4d8", marginBottom: "25px" }}>{featured.overview}</p>
        <button onClick={() => navigate(`/movie/${featured._id}`)} style={styles.primaryBtn}>Explore Movie →</button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "40px", marginBottom: "20px" }}>
        <h2>Now Showing ({dummyShowsData.length} Movies)</h2>
        <button onClick={() => navigate("/movies")} style={styles.secondaryBtn}>Explore All →</button>
      </div>

      <div style={styles.grid}>
        {dummyShowsData.map(movie => (
          <div key={movie._id} onClick={() => navigate(`/movie/${movie._id}`)} style={styles.card}>
            <img src={movie.poster_path} alt={movie.title} style={styles.cardImg} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{movie.title}</h3>
              <p style={{ color: "#a1a1aa", fontSize: "12px" }}>{movie.genres.map(g => g.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Movies = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = dummyShowsData.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={styles.container}>
      <h1>All Movies ({filtered.length})</h1>
      <input
        type="text"
        placeholder="Search movies by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={styles.input}
      />
      <div style={styles.grid}>
        {filtered.map(movie => (
          <div key={movie._id} onClick={() => navigate(`/movie/${movie._id}`)} style={styles.card}>
            <img src={movie.poster_path} alt={movie.title} style={styles.cardImg} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ fontSize: "15px", marginBottom: "5px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{movie.title}</h3>
              <p style={{ color: "#a1a1aa", fontSize: "12px" }}>{movie.genres.map(g => g.name).join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = dummyShowsData.find(m => m._id === id) || dummyShowsData[0];

  return (
    <div style={{ ...styles.container, display: "flex", gap: "40px", flexWrap: "wrap" }}>
      <img src={movie.poster_path} alt={movie.title} style={{ width: "300px", borderRadius: "12px", height: "440px", objectFit: "cover" }} />
      <div style={{ flex: 1, maxWidth: "600px" }}>
        <span style={{ backgroundColor: "#f43f5e", padding: "4px 10px", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>{movie.original_language.toUpperCase()}</span>
        <h1 style={{ fontSize: "36px", margin: "15px 0" }}>{movie.title}</h1>
        <p style={{ color: "#a1a1aa", marginBottom: "15px" }}>★ {movie.vote_average} Rating | {movie.runtime} mins</p>
        <p style={{ color: "#d4d4d8", lineHeight: "1.6", marginBottom: "25px" }}>{movie.overview}</p>
        <button onClick={() => navigate(`/movie/${movie._id}/2025-07-24`)} style={styles.primaryBtn}>Buy Tickets</button>
      </div>
    </div>
  );
};

const SeatLayout = () => {
  const [selectedSeats, setSelectedSeats] = useState(["A1", "A2"]);
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ ...styles.container, textAlign: "center" }}>
      <h2>Select Seats</h2>
      {success ? (
        <div style={{ padding: "40px", backgroundColor: "#18181b", borderRadius: "12px", marginTop: "20px", maxWidth: "500px", marginInline: "auto" }}>
          <h3 style={{ color: "#22c55e", fontSize: "24px" }}>Purchase Successful!</h3>
          <p style={{ color: "#a1a1aa", marginTop: "10px" }}>Your tickets for seats: {selectedSeats.join(", ")} have been confirmed.</p>
        </div>
      ) : (
        <div>
          <div style={{ margin: "30px 0", padding: "20px", background: "#18181b", borderRadius: "12px", display: "inline-block" }}>
            <p style={{ marginBottom: "15px", color: "#a1a1aa" }}>SCREEN THIS WAY</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
              {["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4"].map(seat => (
                <button
                  key={seat}
                  onClick={() => setSelectedSeats(prev => prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat])}
                  style={{
                    padding: "12px 18px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: selectedSeats.includes(seat) ? "#f43f5e" : "#27272a",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p>Selected Seats: {selectedSeats.join(", ") || "None"}</p>
            <p style={{ fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>Total Amount: ${selectedSeats.length * 49}</p>
            <button onClick={() => setSuccess(true)} style={styles.primaryBtn}>Proceed to Checkout / Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Favorite = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1>Your Favorite Movies</h1>
      <div style={{ ...styles.grid, marginTop: "20px" }}>
        {dummyShowsData.slice(0, 3).map(movie => (
          <div key={movie._id} onClick={() => navigate(`/movie/${movie._id}`)} style={styles.card}>
            <img src={movie.poster_path} alt="" style={styles.cardImg} />
            <div style={{ padding: "15px" }}>
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MyBookings = () => (
  <div style={styles.container}>
    <h1>My Bookings</h1>
    <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse", color: "#fff", backgroundColor: "#18181b", borderRadius: "8px", overflow: "hidden" }}>
      <thead>
        <tr style={{ backgroundColor: "#27272a", textAlign: "left" }}>
          <th style={{ padding: "15px" }}>Movie</th>
          <th style={{ padding: "15px" }}>Seats</th>
          <th style={{ padding: "15px" }}>Amount</th>
          <th style={{ padding: "15px" }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {dummyBookingData.map((item, idx) => (
          <tr key={idx} style={{ borderBottom: "1px solid #27272a" }}>
            <td style={{ padding: "15px" }}>{item.show.movie.title}</td>
            <td style={{ padding: "15px" }}>{item.bookedSeats.join(", ")}</td>
            <td style={{ padding: "15px" }}>${item.amount}</td>
            <td style={{ padding: "15px", color: item.isPaid ? "#22c55e" : "#f59e0b" }}>{item.isPaid ? "Paid" : "Unpaid"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Login = ({ setUser }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name: name || email.split("@")[0], email });
    navigate("/");
  };

  return (
    <div style={{ ...styles.container, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "#18181b", padding: "40px", borderRadius: "12px", width: "100%", maxWidth: "400px", border: "1px solid #27272a" }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>{isSignup ? "Sign Up" : "Log In"}</h2>
        {isSignup && (
          <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required style={styles.input} />
        )}
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required style={styles.input} />
        <input type="password" placeholder="Password" required style={styles.input} />
        <button type="submit" style={{ ...styles.primaryBtn, width: "100%", marginTop: "10px" }}>{isSignup ? "Sign Up" : "Log In"}</button>
        <p onClick={() => setIsSignup(!isSignup)} style={{ marginTop: "15px", color: "#a1a1aa", fontSize: "14px", cursor: "pointer", textAlign: "center" }}>
          {isSignup ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: { backgroundColor: "#09090b", color: "#fff", minHeight: "100vh", padding: "20px 40px", fontFamily: "sans-serif" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "#09090b", borderBottom: "1px solid #27272a" },
  logo: { fontSize: "24px", fontWeight: "bold", cursor: "pointer" },
  links: { display: "flex", gap: "25px" },
  link: { color: "#a1a1aa", textDecoration: "none", fontSize: "15px" },
  loginBtn: { backgroundColor: "#f43f5e", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold" },
  primaryBtn: { backgroundColor: "#f43f5e", color: "#fff", border: "none", padding: "12px 28px", borderRadius: "25px", cursor: "pointer", fontWeight: "bold" },
  secondaryBtn: { backgroundColor: "#27272a", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "20px", cursor: "pointer", fontSize: "14px" },
  hero: { backgroundSize: "cover", backgroundPosition: "center", borderRadius: "16px", padding: "60px 40px", minHeight: "380px", display: "flex", flexDirection: "column", justifyContent: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" },
  card: { backgroundColor: "#18181b", borderRadius: "12px", overflow: "hidden", cursor: "pointer" },
  cardImg: { width: "100%", height: "260px", objectFit: "cover" },
  input: { width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #27272a", backgroundColor: "#09090b", color: "#fff", boxSizing: "border-box" },
  footer: { backgroundColor: "#09090b", color: "#a1a1aa", borderTop: "1px solid #27272a", padding: "20px 40px", textAlign: "center", marginTop: "40px" }
};

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/:date" element={<SeatLayout />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}