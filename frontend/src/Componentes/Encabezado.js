import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Encabezado.css";

function Encabezado() {
    const [login, setLogin] = useState(localStorage.getItem('Usuario')); // Cambiamos 'usuario' por 'Usuario'
    const navegacion = useNavigate();

    const salir = () => {
        localStorage.removeItem('Usuario'); // Cambiamos 'clear' por 'removeItem'
        setLogin(null); // Actualizamos el estado para ocultar el botón "Cerrar sesión"
        navegacion('/Inicio'); // Redirigimos al usuario a "/Inicio" después de cerrar sesión
    }

    return (
        <>
            <header>
                <div className="header-content">
                    <Link to="/Inicio" id="logo">
                        <img src={require("../images/LOGO.png")} alt="Logo" id="logo"></img>
                    </Link>
                    <div className="search-bar" id="barra_busqueda">
                        <input type="text" placeholder="Buscar..." id="Buscar"></input>
                        <button type="submit" id="search-button">Buscar</button>
                    </div>
                    <button type="sumbit" id="boton_carrito">
                        <img src={require("../images/carrito1.png")} alt="Carro" id="carrito"></img>
                    </button>
                    <Link to="/Login" id="boton_perfil">
                        <img src={require("../images/Perfil1.png")} alt="Perfil" id="perfil"></img>
                    </Link>
                    {login ? ( // Verificamos si el usuario ha iniciado sesión
                        <>
                            <button onClick={salir}>Cerrar sesión</button>
                        </>
                    ) : (
                        <>
                            <Link to='/Login'>Login</Link>
                        </>
                    )}
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/Categorias">Categorías</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Contactanos">Contáctanos</Link></li>
                    <li><Link to="/Compra">Compra</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Encabezado;

