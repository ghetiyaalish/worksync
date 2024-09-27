
import React, { useState } from 'react';
import { login } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            localStorage.setItem('access', data.access);
            localStorage.setItem('refresh', data.refresh);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.detail || 'Login failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f3f4f6]">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Welcome Back!</h2>
                {error && (
                    <div className="mb-4 text-red-600 bg-red-100 p-3 rounded-md">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1 font-medium" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out text-black"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1 font-medium" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-sm text-blue-500 mt-1 focus:outline-none hover:underline"
                        >
                            {showPassword ? "Hide" : "Show"} Password
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300"
                    >
                        Login
                    </button>
                    <p className="mt-4 text-center text-gray-600">
                        Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
