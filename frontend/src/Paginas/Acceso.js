import react, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Encabezado from "../Componentes/Encabezado";







function Acceso() {
    //declarar mi variable que cambia de estado 

    const [campos, setCampos] = useState({
        correo_electronico: "",
        contrasenia: ""
    });
    const [error, setError] = useState('');
    // redireccionamiento
    const navegacion = useNavigate();

    const acceder = (e) => {
        e.preventDefault(); // previene que la pagina se regarge al enviar el formulario 
        axios.post('http://localhost.8082/acceso', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    localStorage.setItem('Usuario', respuesta.data);
                    navegacion('/');

                } else {
                    setError(respuesta.data.error);
                }
            })

            .catch(error => console.log("Hay un error"));
    }

    return (
        <form onSubmit={acceder}>
            <input type='nombre' placeholder='Nombre' name='nombre'
                onChange={(e) => setCampos({ ...campos, nombre_usuario: e.target.value })} />
            <input type='email' placeholder='Email' name='correo_electronico'
                onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} />
            <input type='password' placeholder='Contraseña' name='contrasena'
                onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} />
            <button type='sumbit'>Ingresar</button>

        </form>
    )

}




export default Acceso;