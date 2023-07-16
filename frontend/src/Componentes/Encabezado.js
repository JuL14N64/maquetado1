// importar react
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../css/Encabezado.css";

// crear la funcion 
function Encabezado() {
    // Retomamos token
    const login = localStorage.getItem('usuario');
    const navegacion = useNavigate();

    // crear un metodo para salir 
    const salir = () => {
        localStorage.clear();
        navegacion('/');
    }

    // metodo que regresa el HTML
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
                    <Link to="/Acceso" id="boton_perfil">
                        <img src={require("../images/Perfil1.png")} alt="Perfil" id="perfil"></img>
                    </Link>
                    <button type="sumbit" id="boton_menu">
                        <img src={require("../images/menu.png")} alt="Menu" id="menu"></img>
                    </button>
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/Categorias">Categorías</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Contactanos">Contáctanos</Link></li>
                    <li><Link to="/Compra">Compra</Link></li>
                    {login ? (
                        <>
                            <button onClick={salir}>Salir</button>
                        </>
                    ) : (
                        <>
                            <Link to="/Acceso">Acceder</Link>
                        </>
                    )}
                    <li><Link to="/Acceso">Acceso</Link></li>
                </ul>
            </nav>
        </>
    );
}

// exportamos 
export default Encabezado;
