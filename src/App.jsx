import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { API_URL } from "./shared";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PollFeed from "./components/PollFeed";
import CreatePoll from './components/CreatePoll';
import Dashboard from './components/Dashboard';
import Poll from './components/Poll';
import ProfilePage from "./components/ProfilePage";

const App = () => {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
      console.log("This is the API_URL:", API_URL);
      const response = await axios.get(`${API_URL}/auth/me`, {
        withCredentials: true,
      });
      console.log("Authenticated user:", response.data.user);
      setUser(response.data.user);
    } catch (error) {
      console.log("Not authenticated:", error);
      setUser(null);
    }
  };

  // Check authentication status on app load
  useEffect(() => {
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      // Logout from our backend
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <NavBar user={user} onLogout={handleLogout} />
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/pollfeed" element={<div><Outlet /></div>}>
            <Route index element={<PollFeed />}/>
            <Route path="createpoll" element={<CreatePoll />} />
            <Route path=":pollId" element={<Poll />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path ="dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </div>
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
