import React from "react";
import "./components.css";

export default function Activity({ activity }) {
  return (
    <li className="activity-item">
      <p>{activity}</p>
    </li>
  );
}
