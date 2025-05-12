// Crear el array de productos
import React, { useState } from 'react';
import '../css/producto.css';

function Producto() {
  const [productos, setProductos] = useState([ 
    { descripcion: "Auriculares Inalámbricos", precio: 49990.5 },
    { descripcion: "Mouse Óptico", precio: 15500 },
    { descripcion: "Monitor 24 Pulgadas", precio: 120000.99 },
    { descripcion: "Webcam HD", precio: 24800.75 },
    { descripcion: "Impresora Multifunción", precio: 85000 },
    { descripcion: "Cable HDMI", precio: 10900 },]);
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
    productos.forEach(p => {
      console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
    });
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