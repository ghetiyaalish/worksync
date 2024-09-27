// src/services/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const register = async (username, email, password) => {
    const response = await axios.post(`${API_URL}register/`, {
        username,
        email,
        password,
    });
    return response.data;
};

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}login/`, {
        username,
        password,
    });
    return response.data;
};

// -------------------------------------------------------------------------

// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [isRegistered, setIsRegistered] = useState(false); // New state

//     const login = () => {
//         setIsAuthenticated(true);
//         setIsRegistered(true); // Set to true upon successful login
//     };
//     const logout = () => {
//         setIsAuthenticated(false);
//         setIsRegistered(false); // Reset on logout
//     };
//     const register = () => {
//         setIsAuthenticated(true);
//         setIsRegistered(true); // Set to true upon successful registration
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, isRegistered, login, logout, register }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);
