import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

import '../css/TaskInput.css';

function Tareas () {
    const [descripcion, setDescripcion] = useState('');
    const [estado, setEstado] = useState('');

    const [lista,setLista] = useState([
        {id:1,descripcion: "Crear Repositorio en GitHub",alumno:"Valen", estado: "pendiente"},
        {id:2,descripcion: "Agregar Colaboradores", alumno:"Franco", estado: "pendiente"},
        {id:3,descripcion: "Crear Rama de Trabajo", alumno:"Selene", estado: "pendiente"},
        {id:4,descripcion: "Hacer Commits con Avanzes", alumno: "Franco", estado: "pendiente"},
         {id:5,descripcion: "Actualizar avance en Readme", alumno: "Axel", estado: "pendiente"}]
        );
     
    return(
        <div className="task-input-container">
            <TaskInput tareas={[lista,setLista]}></TaskInput>
            <TaskList tareas = {[lista,setLista]}></TaskList>
        </div>
    );
}



export default Tareas;