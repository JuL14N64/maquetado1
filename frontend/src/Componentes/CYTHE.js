// importar react 

import React, { useEffect, useState } from "react";

import axios from 'axios';



function Productos() {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/obtenerProductos') // URl de postman de nuestro loca host para la base de datos 
            .then(respuesta => {
                if (respuesta.data.mensaje === 'exitoso') {
                    setProductos(respuesta.data.contenido);
                    console.log(respuesta.data.contenido);
                }
            })
            .catch(error => console.log("error al recuperar los datos"));

    });
    return (
        <>
            {Productos.map((losProductos, index) => {
                return <h1> Nombre del Producto: {losProductos.nombre}  {losProductos.edad} </h1>
                
            })}
        </>
    )
}

export default Productos;





