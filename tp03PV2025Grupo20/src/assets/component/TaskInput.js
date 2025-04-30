jsx
import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
const [text, setText] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(text);
    setText('');
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar tarea"
    />
    <button type="submit">Agregar</button>
    </form>
);
};

export default TaskInput;