// ✅ src/routes/dashboard/Dashboard.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from "../../components/navigation/SideBar";
import Header from "../../components/navigation/Header";
import HomePage from "./HomePage"; // To create later
import Favorites from "./Favorites"; // To create later
import WatchLater from "./WatchLater"; // To create later
import "./dashboard.css";

export default function Dashboard({ userUsername, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-body">
          <SideBar />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
