"useState";
"use client";
import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Container } from "react-bootstrap";
import "./analys.css";
import DropDown from "./components/dropdown";

const weekData = [20, 18.50, 15, 16, 19, 12, 20];
const monthData = [20, 18.50, 12, 18, 19, 15, 19];
const yearData = [20, 18.50, 15, 10, 19, 15, 15];
const weekLabels = [`Lu`, `Ma`, `Mi`, `Jo`, `Vi`, `Sa`, `Du`];
const monthLabels = ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul"];
const yearLabels = ["2021", "2022", "2023", "2024", "2025", "2026", "2027"];

export default function AnalysisReg() {
    const [chartData, setChartData] = useState(weekData);
    const [xLabels, setXLabels] = useState(weekLabels);
    const [activeButton, setActiveButton] = useState("week");

    const handleDataChange = (type) => {
        setActiveButton(type);
        if (type === "week") {
            setChartData(weekData);
            setXLabels(weekLabels);
        }
        if (type === "month") {
            setChartData(monthData);
            setXLabels(monthLabels);
        }
        if (type === "year") {
            setChartData(yearData);
            setXLabels(yearLabels);
        }
    };
    return (
        <Container maxwidth="sm" className="analysis-reg-container">
            <div className="analysis-reg">
                <h1>Analysis Registration</h1>
                <DropDown />
                <div className="chart-container">
                    <div className="chart-controls-inside">
                        <button
                            className={activeButton === "week" ? "active" : ""}
                            onClick={() => handleDataChange("week")}
                        >
                            Saptamina
                        </button>
                        <button
                            className={activeButton === "month" ? "active" : ""}
                            onClick={() => handleDataChange("month")}
                        >
                            Luna
                        </button>
                        <button
                            className={activeButton === "year" ? "active" : ""}
                            onClick={() => handleDataChange("year")}
                        >
                            An
                        </button>
                    </div>
                    <LineChart
                        className="chart"
                        height={400}
                        
                        yAxis={[
                            {
                                width: 80,
                                scaleType: "linear",
                                position: "right",
                                style: { fill: "#000000" },
                                labelStyle: { fill: "#000000", fontSize: 14 },
                                tickFormat: (value) =>
                                     `${String(value)}lei`,
                                tooltipFormatter: (value) => `${value} lei`,
                                },
                        ]}
                        xAxis={[
                            {
                                data: Array.isArray(xLabels) ? xLabels : [],
                                scaleType: "band",
                                labelStyle: { fill: "#000000", fontSize: 14 },
                            },
                        ]}
                        series={[
                            {
                                data: Array.isArray(chartData) ? chartData : [],
                                showMark: false,
                                color: "#26E2B3",
                                lineWidth: 3,
                                label: (point) => {`${point} lei`},
                            },
                        ]}
                        margin={{ top: 60, right: 24, bottom: 24, left: 24 }}
                    ></LineChart>
                </div>
            </div>
        </Container>
    );
}