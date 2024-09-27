import React from 'react';

function Completedtask({ tasks }) {
  // Filter tasks to get only the completed ones
  const completedTasks = tasks.filter(item => item.status === "complete");

  return (
    <div className='bg-gray-900'>
      <div className="grid grid-cols-3 gap-4 p-4">
        {completedTasks.length > 0 ? (
          completedTasks.map((item, i) => (
            <div key={i} className="flex flex-col justify-between bg-gray-800 rounded-xl p-4">
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-300 my-2">{item.description}</p>
              </div>
              <div className="mt-4 flex items-center">
                <button className={`${item.status === "incomplete" ? "bg-red-700" : "bg-green-700"} p-2 rounded w-3/6`}>
                  {item.status}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-gray-300 col-span-3 text-center">
            <p>No completed tasks available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Completedtask;
