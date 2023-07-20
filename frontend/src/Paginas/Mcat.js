import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/Mcat.css";

function Mostrar_categorias() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        obtenerCategorias();
    }, []);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const agregarCategoria = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/agregarCategoria', { nombre, descripcion })
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha agregado una nueva categoría");
                    setNombre("");
                    setDescripcion("");
                    obtenerCategorias();
                } else {
                    setMensaje("Error al agregar la categoría");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    const eliminarCategoria = (id) => {
        axios.post('http://localhost:8081/eliminarCategoria', { id })
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha eliminado la categoría");
                    // Actualizar el estado local eliminando la categoría del estado
                    setCategorias(prevCategorias => prevCategorias.filter(categoria => categoria.id !== id));
                } else {
                    setMensaje("Error al eliminar la categoría");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    const obtenerCategorias = () => {
        axios.get('http://localhost:8081/obtenerCategorias')
            .then(respuesta => {
                if (respuesta.data.mensaje === "exitoso") {
                    setCategorias(respuesta.data.contenido);
                } else {
                    setMensaje("Error al obtener las categorías");
                }
            })
            .catch(error => console.log("Hay un error", error));
    };

    return (
        <>
            <div className="form-container">
                <h1>Agregar Categorías</h1>
                <form onSubmit={agregarCategoria}>
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
                <h2>Categorías existentes:</h2>
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
                        {categorias.map((categoria) => (
                            <tr key={categoria.id}>
                                <td>{categoria.id}</td>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.descripcion}</td>
                                <td>
                                    <button onClick={() => eliminarCategoria(categoria.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Mostrar_categorias;





