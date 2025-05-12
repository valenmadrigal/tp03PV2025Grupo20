import { useState } from "react";
// import TaskList from "./TaskList";
import '../css/TaskInput.css';


function TaskItem (props) {

    const[elemento,setElemento] = useState(props.tarea);
    const[lista,setLista] = props.listaTareas;

    const eliminar = () => {
        console.log(elemento.id)
        const listaEliminada = lista.filter(t => t.id !== elemento.id);
        console.log(listaEliminada);
        setLista(listaEliminada);
        console.log("Tarea Eliminada")
        alert("Tarea Eliminada")
    }
 const cambioEstado = (estadoActual) => {
    return estadoActual === "realizada" ? "pendiente" : "realizada";
  };

      const realizar = (evento) => {
    const elementoNuevo = {
      ...elemento,
      estado: cambioEstado(elemento.estado)
    };
    setElemento(elementoNuevo);
    console.log(`Tarea ahora en estado: ${elementoNuevo.estado}`);
    alert(`La tarea ahora esta: ${elementoNuevo.estado === 'realizada' ? 'Hecha' : 'para Realizar'}`);
  };

    return (
       <div className="task-input-container">
      <div className="tarea">
        <h3>{elemento.descripcion}</h3>
        <h3 className="nombre">{elemento.alumno}</h3>
        <h3>Estado: {elemento.estado}</h3>
        <div className="botones-tarea">
          <button
            className={`realizar ${elemento.estado === 'realizada' ? 'hecho' : ''}`}
            onClick={realizar}
          >
            {elemento.estado === 'realizada' ? 'Hecha' : 'Realizada'}
          </button>
          <button className="realizar" onClick={eliminar }>Eliminar</button>
        </div>
      </div>
    </div>
    );
}

export default TaskItem;
