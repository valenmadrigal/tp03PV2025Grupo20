
import TaskItem from "./TaskItem";

import '../css/TaskInput.css';

function TaskList (props) {

    const [lista,setLista] = props.tareas;


    return (
        <div className="task-input-container">
            <h3 className="titulo-tarea">Lista de Tareas</h3>
            <ul className="tareas">
                {lista.map((elemento)=> (<li key={elemento.id}>
                    <TaskItem tarea = {elemento} listaTareas={[lista,setLista]}></TaskItem>

                    </li>))}
            </ul>

        </div>
    );
}

export default TaskList;
