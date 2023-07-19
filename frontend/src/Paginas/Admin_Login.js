import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import React from "react";
import axios from 'axios';

function LoginAdmin() {
    const [campos, setCampos] = useState({
        correo_electronico: "",
        contrasenia: "",
    });
    const [error, setError] = useState('');
    const navegacion = useNavigate();

    const acceder = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/acceso_admin', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "Correcto") {
                    localStorage.setItem('Usuario', respuesta.data.usuario);
                    navegacion('/Dashboard1');
                } else {
                    setError(respuesta.data.Error);
                }
            })
            .catch(error => console.log("Hay un error", error));
    }

    return (
        <>
            <form className="login-form" onSubmit={acceder}>
                <h2>Login Admin</h2>
                {error && <p className="error-message">{error}</p>}
                <label htmlFor="correo_electronico">Email:</label>
                <input type="email" id="correo_electronico" placeholder="Email" name="correo_electronico" className="email-input" onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} />
                <label htmlFor="contrasenia">Contraseña:</label>
                <input type="password" id="contrasenia" placeholder="Contraseña" name="contrasenia" onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} />
                <button type="submit">Ingresar</button>
                <div className="form-footer">
                    <Link to="/Registro">Registrarse</Link>
                </div>
            </form>
        </>
    )
}

export default LoginAdmin;


