import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../css/Mcat.css";

function Mostrar_categorias() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState(null); // Nuevo estado para almacenar la imagen
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

    const handleImagenChange = (e) => {
        // Aquí obtenemos la imagen seleccionada por el usuario
        const imageFile = e.target.files[0];
        setImagen(imageFile);
    };

    const agregarCategoria = (e) => {
        e.preventDefault();
        // Creamos un objeto FormData para enviar la imagen junto con los otros datos
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("imagen", imagen);

        axios.post('http://localhost:8081/agregarCategoria', formData)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    setMensaje("Se ha agregado una nueva categoría");
                    setNombre("");
                    setDescripcion("");
                    setImagen(null); // Reseteamos el estado de la imagen
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
                    {/* Nuevo campo para subir imágenes */}
                    <label htmlFor="imagen">Imagen:</label>
                    <input
                        type="file"
                        id="imagen"
                        name="imagen"
                        onChange={handleImagenChange}
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






