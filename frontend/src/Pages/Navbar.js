

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';            // Assuming you have a Home component
import LoginPage from './Login';      // Assuming you have a Login component
import RegisterPage from './Register'; // Assuming you have a Register component

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Router>
            <nav className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <span className="material-icons text-white text-2xl mr-2">sync</span>
                            <h1 className="text-white text-2xl font-bold">WorkSync</h1>
                        </div>
                        <div className="hidden sm:flex space-x-4">
                            <Link to="/home" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link to="/" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Add Task</Link>
                            <Link to="/login" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                            <Link to="/register" className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                        </div>
                        <div className="sm:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white focus:outline-none"
                                aria-expanded={isOpen}
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                        <Link to="/home" className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/" className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Add Task</Link>
                        <Link to="/login" className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                        <Link to="/register" className="text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<addtask />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};

export default Navbar;
