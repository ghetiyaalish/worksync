// src/AddTask.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


const AddTask = ({ onAddTask }) => {

    const { isAuthenticated, isRegistered } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    if (!isRegistered) {
        return <div>You must be registered to add tasks. Please register to continue.</div>; // Inform the user they need to be registered
    }


    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'incomplete',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!task.title || !task.description) {
            return; // Basic validation
        }

        // Here you would typically call an API to add the task
        onAddTask(task); // Call the prop function to handle the added task
        setTask({ title: '', description: '', status: 'incomplete' }); // Reset form
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="title">Task Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={task.description}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="status">Status</label>
                    <select
                        name="status"
                        id="status"
                        value={task.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="incomplete">Incomplete</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Add Task
                </button>
            </form>
        </div>
    );
};

export default AddTask;
