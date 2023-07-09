

// importar react

import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import "../css/Encabezado.css";


// crear la funcion 

function Encabezado() {

    //Retomamos token

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
                <div class="header-content">
                    <img src={require("../images/LOGO.png")} alt="Logo" id="logo"></img>
                    <div class="search-bar" id="barra_busqueda">
                        <input type="text" placeholder="Buscar..." id="Buscar"></input>
                        <button type="submit" id="search-button">Buscar</button>
                    </div>
                    <img src={require("../images/carrito1.png")} alt="Carro" id="carrito"></img>
                    <img src={require("../images/Perfil1.png")} alt="Perfil" id="perfil"></img>
                    <img src={require("../images/menu.png")} alt="Menu" id="menu"></img>
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/Catalogo">Catálogo</Link></li>
                    <li><Link to="/Categorias">Categorías</Link></li>
                    <li><Link to="/Productos">Productos</Link></li>
                    <li><Link to="/Contactanos">Contáctanos</Link></li>
                    <li><Link to="/Compra">Compra</Link></li>
                    {
                        login ?
                            <>
                                <a onClick={salir}>Salir</a>
                            </>
                            : // de lo contrario
                            <>
                                <Link to="/Acceso">Acceder</Link>
                            </>
                    }
                    <li><Link to="/Acceso">Acceso</Link></li>
                    <li><Link to="/Formulario">Formulario</Link></li>


                </ul>
            </nav>
        </>
    );
}

// exportamos 

export default Encabezado;