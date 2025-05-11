// App.jsx
import React, { useState } from 'react';             
import TaskInput from './components/TaskInput';      
import TaskList from './components/TaskList';   
import './App.css'     
const App = () => {
  const [tasks, setTasks] = useState([]);            
  const [inputValue, setInputValue] = useState('');  

  const handleAddTask = () => {                      
    if (inputValue.trim() === '') return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleToggleCompleted = (id) => {            //marcar como completada la tarea
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {                 //elimina tareas
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1>Listado de Tareas</h1>
      <TaskInput                                    // entrada 
        inputValue={inputValue}
        setInputValue={setInputValue}
        onAddTask={handleAddTask}
      />
      <TaskList                                     // muestra
        tasks={tasks}
        onToggleCompleted={handleToggleCompleted}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
