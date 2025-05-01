"use client";
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifică dacă rulează pe client
        if (typeof window !== "undefined") {
            const userEmail = localStorage.getItem("userEmail");
            setIsAuthenticated(!!userEmail); // Setează autentificarea pe baza localStorage
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-brand">asdpsc</div>
            <ul className="navbar-menu">
                <Link href="/About" className="navbar-item">Despre noi</Link>
                <Link href="/analysis-reg" className="navbar-item">Analiza pe regiune</Link>
                <Link href="/Current" className="navbar-item">Analiza datelor curente</Link>
                {isAuthenticated ? (
                    <Link href="/dashboard" className="navbar-item">Dashboard</Link>
                ) : (
                    <Link href="/LogIn" className="navbar-item">Logare</Link>
                )}
            </ul>
        </nav>
    );
}