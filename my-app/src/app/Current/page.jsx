'use static'
'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { Select } from "@mui/material/";
import { MenuItem } from "@mui/material/";
import "./current.css";

const rates = {
    "Gaze naturale": 3.5,
    "Energie electrica": 1.2,
    "Energie termica": 4.8,
    "Apa si canalizare": 2.5
}

const TVA_RATE = 0.8;
const SERVICE_FEE = 10;

export default function Current() {
    const [selectedService, setSelectedService] = React.useState("none");
    const [previousIndex, setPreviousIndex] = React.useState("");
    const [currentIndex, setCurrentIndex] = React.useState("");
    const [amountDue, setAmountDue] = React.useState(0);

    const handleCalculation = () => {
        if (selectedService !== "none" && previousIndex && currentIndex) {
            const consumption = Math.max(0, currentIndex - previousIndex); // Evită valori negative
            const total = consumption * rates[selectedService]; 
            const tva = total * TVA_RATE; 
            const finalTotal = total + tva + SERVICE_FEE;
            setAmountDue(finalTotal.toFixed(2));
        }
    };

    return (
        <Container className="payment-container">
            <h2>Calculul plății</h2>
            <label>Serviciu:</label>
            <Select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
                <MenuItem value="none" disabled>Selectează serviciul</MenuItem>
                {Object.keys(rates).map((service) => (
                    <MenuItem key={service} value={service}>{service}</MenuItem>
                ))}
            </Select>
            <label>Indexul precedent:</label>
            <input type="number" value={previousIndex} onChange={(e) => setPreviousIndex(Number(e.target.value))} />

            <label>Indexul curent:</label>
            <input type="number" value={currentIndex} onChange={(e) => setCurrentIndex(Number(e.target.value))} />
            <button onClick={handleCalculation}>Calculează suma</button>
            <div className="checkout">
                <h3>Total de achitat: {amountDue} lei</h3>
            </div>
        </Container>

    );
}