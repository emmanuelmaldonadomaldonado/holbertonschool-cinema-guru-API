import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Activity from "../Activity";
import "./navigation.css";

export default function SideBar() {
  const [setSelected] = useState("home");
  // const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  // const [showActivities, setShowActivities] = useState(false);

  const navigate = useNavigate();

  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/activity")
      .then((response) => setActivities(response.data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setPage("home")}>🏠 Home</li>
        <li onClick={() => setPage("favorites")}>⭐ Favorites</li>
        <li onClick={() => setPage("watchlater")}>⏰ Watch Later</li>
      </ul>
      <h4>Latest Activities</h4>
      <ul>
        {activities.slice(0, 10).map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </ul>
    </nav>
  );
}
