import React from 'react';

const Home = () => {
    const features = [
        { title: "Task Management", description: "Organize your tasks effectively." },
        { title: "Real-time Collaboration", description: "Work together in real time." },
        { title: "Analytics", description: "Track your performance with insights." },
    ];

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to WorkSync</h1>
                <p className="mt-4 text-lg text-gray-600">Your workspace for seamless collaboration.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map(({ title, description }) => (
                    <div
                        key={title}
                        className="bg-white p-6 rounded-lg shadow-md text-center"
                    >
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p className="mt-2 text-gray-600">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
