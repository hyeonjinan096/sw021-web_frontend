import "./App.css";
import MovieList from "./components/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
export default function App() {
  return (
    <BrowserRouter>
      <main>
        <header className="header">
          <h2 className="logo">MovieList</h2>
          <div className="nav-links">
            <a className="login-btn" href="./login.html">
              Login
            </a>
            <a className="signup-btn" href="./signup.html">
              Signup
            </a>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route
            path="/movie/:movieId"
            element={<MovieDetail />}
          />
        </Routes>

        <footer className="footer">
          <h3>© 2023 MovieList. All rights reserved.</h3>
        </footer>
      </main>
    </BrowserRouter>
  );
}
