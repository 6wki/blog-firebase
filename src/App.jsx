import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cp from "./pages/CreatePost";
import Lgn from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import HomePage from "./pages/LandingPage/LandingPage";

function App() {
  // Setting the Auth of the user
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // Signing out function
  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      {/* If the user is logged in Show this navbar */}
      {isAuth && (
        <nav className="hmPageNavbar glass">
          <Link to="/">Home</Link>
          <Link to="/newpost">Create Post</Link>
          <button onClick={signOutUser}>Log Out</button>
        </nav>
      )}
      <Routes>
        {/* Changing the homepage depending on the user if he is logged in or out */}
        <Route
          path="/"
          element={!isAuth ? <HomePage /> : <Home isAuth={isAuth} />}
        />
        <Route path="/newpost" element={<Cp />} isAuth={isAuth} />
        <Route path="/login" element={<Lgn setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
