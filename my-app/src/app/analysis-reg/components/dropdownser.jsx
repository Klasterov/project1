import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./dropdown.css";

const options = [
  { value: "none", label: "Selecteaza serviciul" },
  { value: "Gaze naturale", label: "Gaze naturale" },
  { value: "Energie electrica", label: "Energie electrica" },
  { value: "Energie termica", label: "Energie termica" },
  { value: "Apa si canalizare", label: "Apa si canalizare" },
];

export default function DropDownser({ selectedService, setSelectedService }) {
  const handleChange = (event) => {
    setSelectedService(event.target.value); // Actualizează serviciul ales
  };

  return (
    <div className="dropdown-container">
      <Select value={selectedService} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}