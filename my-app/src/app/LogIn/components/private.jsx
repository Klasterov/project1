import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const isAuthenticated = !!localStorage.getItem("userEmail"); // Verifică dacă utilizatorul este autentificat

    return isAuthenticated ? children : <Navigate to="/login" />;
}