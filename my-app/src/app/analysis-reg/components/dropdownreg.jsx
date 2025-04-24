import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "./dropdown.css";

const options = [
  { value: 10, label: "Documentation" },
  { value: 20, label: "Components" },
  { value: 30, label: "Features" },
];

export default function DropDownser() {
  const [selectedValue, setSelectedValue] = React.useState(10);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <Select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}