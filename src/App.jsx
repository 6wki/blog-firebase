import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cp from "./pages/CreatePost";
import Lgn from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import HomePage from "./pages/LandingPage/LandingPage";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      {isAuth && (
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/newpost">Create Post</Link>
          <button onClick={signOutUser}>Log Out</button>
        </nav>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Home isAuth={isAuth} />} />
        <Route path="/newpost" element={<Cp />} isAuth={isAuth} />
        <Route path="/login" element={<Lgn setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
