
import React, { useState, useEffect } from "react";
import Encabezado from "../Componentes/Encabezado";
import "../css/producto.css";

function Productos() {
    const [productos, setProductos] = useState([]); // Estado para almacenar los productos

    useEffect(() => {
        // Realizar la solicitud HTTP para obtener la lista de productos del servidor
        fetch("http://localhost:8081/obtenerProductos")
            .then((response) => response.json())
            .then((data) => {
                if (data.mensaje === "exitoso") {
                    setProductos(data.contenido);
                }
            })
            .catch((error) => console.error("Error al obtener los productos:", error));
    }, []);

    return (
        <>
            <Encabezado />
            <main>
                <div className="productos-container">
                    <h2>Nuestros Productos</h2>
                    <div className="productos-list">
                        {productos.map((producto) => (
                            <div key={producto.id} className="producto-item">
                                <img
                                    src={`http://localhost:8081/uploads/${producto.imagen}`}
                                    alt={producto.nombre}
                                />
                                <h3>{producto.nombre}</h3>
                                <p>{producto.descripcion}</p>
                                <p>Precio: {producto.precio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Productos;


