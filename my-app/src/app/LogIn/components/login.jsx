"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false); // Stare pentru a comuta între logare și înregistrare
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !password) {
            alert("Toate câmpurile sunt obligatorii!");
            return;
        }

        if (isRegistering) {
            // Logica pentru înregistrare
            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);
            alert("Înregistrare reușită! Acum te poți loga.");
            setIsRegistering(false); // Comută la modul de logare
        } else {
            // Logica pentru logare
            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                alert("Autentificare reușită!");
                navigate("/dashboard");
            } else {
                alert("Email sau parolă incorectă!");
            }
        }
    };

    return (
        <Container className="auth-container">
            <h2>{isRegistering ? "Înregistrare" : "Logare"}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Parolă"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit}>
                {isRegistering ? "Înregistrează-te" : "Logare"}
            </button>
            <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: "pointer", color: "blue" }}>
                {isRegistering
                    ? "Ai deja un cont? Loghează-te!"
                    : "Nu ai cont? Înregistrează-te!"}
            </p>
        </Container>
    );
}