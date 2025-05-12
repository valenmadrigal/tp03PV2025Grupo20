
import TaskItem from "./TaskItem";

import '../css/TaskInput.css';

function TaskList (props) {

    const [lista,setLista] = props.tareas;
const mostrarTareasEnAlerta = () => {
  let mensajeAlerta = "Tareas:\n";
  lista.forEach(tarea => {
    mensajeAlerta += `${tarea.alumno} tiene que ${tarea.descripcion}\n`;
  });
  alert(mensajeAlerta);
};

    return (
        <div className="task-input-container">
           <div className="header-lista-tareas">
        <h3 className="titulo-tarea">Lista de Tareas</h3>
        <button className="boton-mostrar-tareas" onClick={mostrarTareasEnAlerta}>Mostrar Tareas</button>
      </div>      <ul className="tareas">
                {lista.map((elemento)=> (<li key={elemento.id}>
                    <TaskItem tarea = {elemento} listaTareas={[lista,setLista]}></TaskItem>

                    </li>))}
            </ul>

        </div>
    );
}

export default TaskList;
