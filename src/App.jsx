//app
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  // Función para agregar una tarea
  const handleAddTask = (text) => {
    if (text.trim() === '') return; // Evita agregar tareas vacías

    const newTask = {
      id: Date.now(),   
      text,             
      completed: false, 
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); 
  };

  // Función para alternar el estado de completado de una tarea
  const handleToggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>Listado de las Tareas</h1>
      <TaskInput
        inputValue={inputValue}  
        setInputValue={setInputValue}  
        onAddTask={handleAddTask} 
      />
      <TaskList
        tasks={tasks}  
        onToggleCompleted={handleToggleCompleted}  
        onDelete={handleDeleteTask}  
      />
    </div>
  );
};

export default App;
