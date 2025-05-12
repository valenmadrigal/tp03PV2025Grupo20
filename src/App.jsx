import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Producto from './assets/component/Productos.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="contenedor-principal" style={{ 
  textAlign: 'center', 
  textDecoration: 'underline', 
  fontWeight: 'bold' 
}}>
  <h1>Programacion Visual - TP3</h1>
  <Producto></Producto>
</div>
  );
}

export default App