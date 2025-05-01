"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Services from "./components/services";

export default function Dashboard() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPassword");
        router.push("/login"); // Redirecționare la Login
    };

    return (
        <div className="dashboard-container">
            <h2>Bun venit în dashboard-ul tău!</h2>
            <p>Aici vei găsi informațiile personale și setările contului.</p>

            <Services />

            <button onClick={handleLogout} style={{ marginTop: "20px" }}>Delogare</button>
        </div>
    );
}