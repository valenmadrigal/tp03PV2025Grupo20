import { useState } from 'react'
import Producto from './assets/component/Productos.jsx'
import Tareas from './assets/component/Tareas.jsx'
import './assets/css/App.css'


function App() {
 
  return (
   <div className="contenedor-principal" style={{ 
  textAlign: 'center', 
  fontWeight: 'bold' 
  
}}>
  <h1 className='titulo'>Programacion Visual - TP3</h1>
  <div className="componentes-lado-a-lado">
  <div>
    <Producto />
  </div>
  <div>
    <Tareas />
  </div>
</div>
</div>
  );
}

export default App