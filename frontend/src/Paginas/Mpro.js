import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/Mcat.css"; // Usamos el mismo CSS que para Mostrar_categorias

function Mostrar_productos() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const agregarProducto = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/agregarProducto', { nombre, descripcion })
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha agregado un nuevo producto");
                    setNombre("");
                    setDescripcion("");
                    obtenerProductos();
                } else {
                    setMensaje("Error al agregar el producto");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    const eliminarProducto = (id) => {
        axios.post('http://localhost:8081/eliminarProducto', { id })
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha eliminado el producto");
                    setProductos(prevProductos => prevProductos.filter(producto => producto.id !== id));
                } else {
                    setMensaje("Error al eliminar el producto");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    const obtenerProductos = () => {
        axios.get('http://localhost:8081/obtenerProductos')
            .then(respuesta => {
                if (respuesta.data.mensaje === "exitoso") {
                    setProductos(respuesta.data.contenido);
                } else {
                    setMensaje("Error al obtener los productos");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    return (
        <>
            <div className="form-container">
                <h1>Agregar Productos</h1>
                <form onSubmit={agregarProducto}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                    />
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleDescripcionChange}
                        rows={4}
                    />
                    <button type="submit">Agregar</button>
                </form>
                <p>{mensaje}</p>
            </div>

            <div className="table-container">
                <h2>Productos existentes:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Mostrar_productos;
