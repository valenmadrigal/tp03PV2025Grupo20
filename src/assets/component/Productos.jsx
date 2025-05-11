// Crear el array de productos
import React, { useState } from 'react';
import '../css/producto.css';

function Producto() {
  const [productos, setProductos] = useState([ 
     { descripcion: "Webcam HD", precio: 19000.75 },
  { descripcion: "Teclado Mecánico RGB", precio: 45500.00 },
  { descripcion: "Mouse Inalámbrico Ergonómico", precio: 18990.50 },
  { descripcion: "Monitor LED 24 Pulgadas", precio: 115000.99 },
  { descripcion: "CABLE USB", precio: 11500.99 },
  { descripcion: "Auriculares Gaming con Micrófono", precio: 32800.25 },
  { descripcion: "Parlantes Estéreo Bluetooth", precio: 27650.80 },
  { descripcion: "Silla de Escritorio Ergonómica", precio: 89999.00 },
  { descripcion: "Impresora Multifunción a Color", precio: 152000.60 },
  { descripcion: "Disco Duro Externo 1TB", precio: 68700.45 },
  { descripcion: "Memoria RAM 16GB DDR4", precio: 51300.10 },]);
    
  const [productosOriginales, setProductosOriginales] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [ivaAgregado, setIvaAgregado] = useState(false);

  const agregarProducto = () => {
    if (descripcion && precio) {
      const nuevoProducto = { descripcion, precio: parseFloat(precio) };
      const nuevosProductos = [...productos, nuevoProducto];
      setProductos(nuevosProductos);
      setProductosOriginales(nuevosProductos); // Actualiza originales
      setDescripcion('');
      setPrecio('');
      setIvaAgregado(false); // Reiniciar IVA si se agrega producto nuevo
    } else {
      alert("Completa la descripción y el precio");
    }
  };

 const mostrarProductos = () => {
  let mensajeAlerta = "Lista de Productos:\n";
  productos.forEach(p => {
    mensajeAlerta += `Producto: ${p.descripcion} - Precio: $${p.precio}\n`;
  });
  alert(mensajeAlerta);
};
  const ordenarProductos = () => {
    const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(ordenados);
    setProductosOriginales(ordenados);
  };

  const eliminarMasBarato = () => {
    if (productos.length === 0) return;
    const menorPrecio = Math.min(...productos.map(p => p.precio));
    const filtrados = productos.filter(p => p.precio !== menorPrecio);
    setProductos(filtrados);
    setProductosOriginales(filtrados);
  };

  const filtrarProductos = () => {
    const filtrados = productos.filter(p => p.precio > 20000);
    setProductos(filtrados);
    setProductosOriginales(filtrados);
  };

  const agregarIVA = () => {
    if (!ivaAgregado) {
      const conIVA = productos.map(p => ({
        ...p,
        precio: parseFloat((p.precio * 1.21).toFixed(2))
      }));
      setProductos(conIVA);
      setIvaAgregado(true);
    } else {
      // Restauracion a precios originales
      setProductos(productosOriginales);
      setIvaAgregado(false);
    }
  };
   return (
    <div className="producto-wrapper">

      <h2 className="producto-titulo">Gestión de Productos</h2>
      <div className="producto-wrapper">
  
      <button
          onClick={mostrarProductos}
          style={{
            backgroundColor: '#34495e', 
            color: '#ecf0f1', 
            border: '1px solid #434a54', 
            borderRadius: '10px',
            padding: '0.8rem 1.5rem', 
            fontSize: '1.2rem', 
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#434a54')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#34495e')}
        >
          Mostrar en Consola
        </button>
    </div>
      <div className="producto-formulario">
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button onClick={agregarProducto}>Agregar</button>
      </div>



      <div className="producto-botones">
        <button onClick={filtrarProductos}>Filtrar '&gt;' $20.000</button>
        <button onClick={agregarIVA}>
          {ivaAgregado ? 'Quitar IVA' : 'Agregar IVA'}
        </button>
        <button onClick={ordenarProductos}>Ordenar</button>
        <button onClick={eliminarMasBarato}>Eliminar Menor Precio</button>
      </div>

      <ul className="producto-lista">
        {productos.map((p, index) => (
          <li key={index} className="producto-item">
            <span>{p.descripcion}</span>
            <span>${p.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
  export default Producto;