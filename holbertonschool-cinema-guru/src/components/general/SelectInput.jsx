// src/components/general/SelectInput.jsx
import React from "react";
import "./general.css";

export default function SelectInput({
  label,
  options,
  className,
  value,
  setValue,
}) {
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`select-container ${className}`}>
      {label && <label>{label}</label>}
      <select value={value} onChange={handleSelect}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
