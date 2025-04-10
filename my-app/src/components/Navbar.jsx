"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";


export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="navbar-brand">asdpsc</div>
        <ul className="navbar-menu">
            <Link href="/About" className="navbar-item">Despre noi</Link>
            <Link href="/analysis-reg" className="navbar-item">Analiza pe regiune</Link>
            <Link href="/Current" className="navbar-item">Analiza datelor curente</Link>
            <Link href="/LogIn" className="navbar-item">Autentificare</Link>
        </ul>
        </nav>
    );
}