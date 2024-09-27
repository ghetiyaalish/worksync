// // src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alltask from './Pages/Alltask';
import Completedtask from './Pages/Completedtask';
import Incompletedtask from './Pages/Incompletedtask';
import Navbar from './Pages/Navbar';
import Add from './Pages/Add'
import { fetchTasks } from './services/TaskService';
// import Addtask from './Pages/Add';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', status: 'incomplete' });
  const [editingTask, setEditingTask] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const handleAddTask = async () => {
    const addedTask = await fetch('http://localhost:8000/api/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    }).then(res => res.json());
    
    setTasks([...tasks, addedTask]);
    resetForm();
  };

  const handleEditTask = async () => {
    const updatedTask = await fetch(`http://localhost:8000/api/tasks/${editingTask.id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    }).then(res => res.json());

    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    resetForm();
  };

  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:8000/api/tasks/${id}/`, { method: 'DELETE' });
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setNewTask({ title: task.title, description: task.description, status: task.status });
    setIsAdding(true);
  };

  const resetForm = () => {
    setNewTask({ title: '', description: '', status: 'incomplete' });
    setEditingTask(null);
    setIsAdding(false);
  };

  return (
    <div className='bg-gray-900 text-white h-screen p-3 relative'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Add/>}>
           <Route
            index 
             element={
              <Alltask 
                tasks={tasks} 
                onAdd={() => setIsAdding(true)} 
                onDelete={handleDeleteTask} 
                onEdit={handleEditClick} 
              />
            } 
          />
          <Route path="/completedtask" element={<Completedtask tasks={tasks} />} />
          <Route path="/incompletedtask" element={<Incompletedtask tasks={tasks} />} />
      
          </Route>

        </Routes>
      </Router>

      {isAdding && (
        <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
          <div className='w-2/6 bg-gray-900 p-4 rounded'>
            <h3>{editingTask ? "Edit Task" : "Add New Task"}</h3>
            <input 
              type="text" 
              placeholder="Title" 
              value={newTask.title} 
              onChange={e => setNewTask({ ...newTask, title: e.target.value })} 
              className='text-white px-3 py-2 rounded w-full bg-gray-700'
              required
            /><br/><br/>
            <textarea 
              placeholder="Description" 
              value={newTask.description} 
              onChange={e => setNewTask({ ...newTask, description: e.target.value })} 
              className='text-white px-3 py-2 rounded w-full bg-gray-700 my-3'
            /><br/><br/>
            <select 
              value={newTask.status} 
              onChange={e => setNewTask({ ...newTask, status: e.target.value })} 
              className='text-white px-3 py-2 rounded w-full bg-gray-700'>
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select><br/><br/>
            <button onClick={editingTask ? handleEditTask : handleAddTask} className='p-2 rounded w-3/6'>
              {editingTask ? "Update Task" : "Add Task"}
            </button>
            <button onClick={resetForm} className='p-2 rounded w-3/6'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;




