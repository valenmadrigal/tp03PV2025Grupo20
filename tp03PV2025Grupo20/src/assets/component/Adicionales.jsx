// Crear el array de productos
const productos = [
    { descripcion: "Teclado mecánico", precio: 65000 },
    { descripcion: "Mouse inalámbrico", precio: 35000 },
    { descripcion: "Monitor 24 pulgadas", precio: 120000 },
    { descripcion: "Auriculares gaming", precio: 75000 },
    { descripcion: "Webcam HD", precio: 40000 },
    { descripcion: "Parlantes estéreo", precio: 50000 },
  ];
  
  // 1 - Mostrar en consola cada producto usando forEach
  function mostrarProductos(arrayProductos) {
    arrayProductos.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  }
  
  console.log("--- Lista de productos ---");
  mostrarProductos(productos);
  
  // 2 - Crear un nuevo array con los productos cuyo precio sea mayor a $50000, usando filter
  function obtenerProductosMayorPrecio(arrayProductos, precioMinimo) {
    return arrayProductos.filter(producto => producto.precio > precioMinimo);
  }
  
  const productosMayorA50000 = obtenerProductosMayorPrecio(productos, 50000);
  console.log("\n--- Productos con precio mayor a $50000 ---");
  mostrarProductos(productosMayorA50000);
  
  // 3 - Crear un array con los productos, pero con el precio con IVA incluido (21%), usando map
  function calcularPrecioConIVA(arrayProductos, porcentajeIVA) {
    const iva = porcentajeIVA / 100;
    return arrayProductos.map(producto => ({
      ...producto, // Mantiene las otras propiedades del objeto
      precioConIVA: parseFloat((producto.precio * (1 + iva)).toFixed(2)),
    }));
  }
  
  const productosConIVA = calcularPrecioConIVA(productos, 21);
  console.log("\n--- Productos con IVA incluido (21%) ---");
  productosConIVA.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio con IVA: $${producto.precioConIVA}`);
  });
  export default mostrarProductos;