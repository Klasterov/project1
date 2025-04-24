"useState";
"use client";
import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Container } from "react-bootstrap";
import "./analys.css";
import DropDown from "./components/dropdownreg";
import DropDownser from "./components/dropdownser";

const dataSets = {
    "Gaze naturale": {
        week: [10, 12, 14, 16, 18, 11, 15],
        month: [14, 13, 12, 18, 17, 16, 19],
        year: [20, 22, 21, 19, 18, 17, 16]
    },
    "Energie electrica": {
        week: [20, 18.50, 15, 16, 19, 12, 20],
        month: [20, 18.50, 12, 18, 19, 15, 19],
        year: [20, 18.50, 15, 10, 19, 15, 15]
    },
    "Energie termica": {
        week: [12, 14, 16, 18, 20, 15, 10],
        month: [15, 12, 18, 20, 22, 21, 19],
        year: [14, 18, 13, 17, 15, 16, 19]
    },
    "Apa si canalizare": {
        week: [8, 9, 10, 11, 12, 13, 14],
        month: [10, 12, 15, 14, 13, 16, 17],
        year: [11, 15, 10, 14, 12, 13, 16]
    }
};

const weekLabels = [`Lu`, `Ma`, `Mi`, `Jo`, `Vi`, `Sa`, `Du`];
const monthLabels = ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul"];
const yearLabels = ["2021", "2022", "2023", "2024", "2025", "2026", "2027"];

export default function AnalysisReg() {
    const [selectedService, setSelectedService] = useState("Gaze naturale"); // Default
    const [chartData, setChartData] = useState([]);
    const [xLabels, setXLabels] = useState(weekLabels);
    const [activeButton, setActiveButton] = useState("week");

    // Actualizează graficul când se schimbă serviciul sau perioada
    useEffect(() => {
        if (dataSets[selectedService]) {
            setChartData(dataSets[selectedService][activeButton] || []);
            setXLabels(activeButton === "week" ? weekLabels : activeButton === "month" ? monthLabels : yearLabels);
        } else {
            setChartData([]);
        }
        console.log(`Serviciu selectat: ${selectedService}`);
    }, [selectedService, activeButton]); // Se execută când `selectedService` sau `activeButton` se schimbă

    return (
        <Container fluid className="analysis-reg-container">
            <div className="analysis-reg">
                <h1>Analysis Registration</h1>

                <div className="drop-down">
                    <DropDown />
                    <DropDownser selectedService={selectedService} setSelectedService={setSelectedService} />
                </div>

                <div className="chart-container">
                    <div className="chart-controls-inside">
                        <button
                            className={activeButton === "week" ? "active" : ""}
                            onClick={() => setActiveButton("week")}
                        >
                            Săptămâna
                        </button>
                        <button
                            className={activeButton === "month" ? "active" : ""}
                            onClick={() => setActiveButton("month")}
                        >
                            Luna
                        </button>
                        <button
                            className={activeButton === "year" ? "active" : ""}
                            onClick={() => setActiveButton("year")}
                        >
                            An
                        </button>
                    </div>

                    <LineChart
                        className="chart"
                        height={400}
                        yAxis={[{
                            width: 80,
                            scaleType: "linear",
                            position: "right",
                            style: { fill: "#000000" },
                            labelStyle: { fill: "#000000", fontSize: 14 },
                            tickFormat: (value) => `${value} lei`,
                            tooltipFormatter: (value) => `${value} lei`
                        }]}
                        xAxis={[{
                            data: xLabels,
                            scaleType: "band",
                            labelStyle: { fill: "#000000", fontSize: 14 }
                        }]}
                        series={[{
                            data: chartData,
                            showMark: true, // Activează marcajele
                            color: "#26E2B3",
                            lineWidth: 3,
                            label: (point) => `${point} lei`
                        }]}
                        margin={{ top: 60, right: 24, bottom: 24, left: 24 }}
                    ></LineChart>
                </div>
            </div>
        </Container>
    );
}