// src/components/general/Input.jsx
import React from "react";
import "./general.css";

export default function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon,
  inputAttributes,
}) {
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
        />
      </div>
    </div>
  );
}
