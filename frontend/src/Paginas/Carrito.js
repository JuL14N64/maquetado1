import React, { useContext } from "react";
import Encabezado from "../Componentes/Encabezado";
import { CarritoContext } from "../App";
import "../css/Carrito.css";

function Carrito() {
  // Get the cart state and setter function from the context
  const { carrito, setCarrito } = useContext(CarritoContext);

  // Handler para eliminar un producto del carrito
  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  return (
    <>
      <Encabezado />
      <main>
        {/* Render the cart items */}
        <div className="carrito-container">
          <h2>Carrito de Compra</h2>
          <div className="carrito-items">
            {carrito.map((item) => (
              <div key={item.id} className="carrito-item">
                <img
                  src={`http://localhost:8081/uploads/${item.imagen}`}
                  alt={item.nombre}
                />
                <h3>{item.nombre}</h3>
                <p>Precio: {item.precio}</p>

                {/* Botón "Eliminar" */}
                <button onClick={() => eliminarProducto(item.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Carrito;
