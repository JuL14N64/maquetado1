

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Carrito.css";

//2 

function Carrito() {
    //3
    return (
        <>
            <Encabezado />
            <>
                <header>
                    <div className="header-content">
                        <img src="images/LOGO.png" alt="Logo" id="logo" />
                        <div className="search-bar" id="barra_busqueda">
                            <input type="text" placeholder="Buscar..." id="Buscar" />
                            <button type="submit" id="search-button">
                                Buscar
                            </button>
                        </div>
                        <div className="header-icons" id="logos">
                            <img src="images/carrito1.png" alt="Carro" id="carrito" />
                            <img src="images/Perfil1.png" alt="Perfil" id="perfil" />
                            <img src="images/menu.png" alt="Menu" id="menu" />
                        </div>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Catálogo</a>
                        </li>
                        <li>
                            <a href="#">Categorías</a>
                        </li>
                        <li>
                            <a href="#">Productos</a>
                        </li>
                        <li>
                            <a href="#">Contáctanos</a>
                        </li>
                        <li>
                            <a href="#">Iniciar Sesión</a>
                        </li>
                    </ul>
                </nav>
                <main>
                    <h1>Bienvenido a nuestra tienda en línea</h1>
                    <p>
                        Explora nuestra amplia selección de productos y encuentra lo que
                        necesitas.
                    </p>
                    <div className="product-list">
                        <div className="product">
                            <img src="images/producto1.png" alt="Producto 1" />
                            <h2>Producto 1</h2>
                            <p>Descripción del producto 1.</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div className="product">
                            <img src="images/producto2.png" alt="Producto 2" />
                            <h2>Producto 2</h2>
                            <p>Descripción del producto 2.</p>
                            <button>Agregar al carrito</button>
                        </div>
                        <div className="product">
                            <img src="images/producto3.png" alt="Producto 3" />
                            <h2>Producto 3</h2>
                            <p>Descripción del producto 3.</p>
                            <button>Agregar al carrito</button>
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        <img src="images/correo.png" alt="Correo" />
                        <p>Correo: cithe@experts.com</p>
                    </div>
                    <div>
                        <img src="images/telefono.png" alt="Teléfono" />
                        <p>Teléfono: 899736212</p>
                    </div>
                </footer>
            </>



        </>
    )
}

//4

export default Carrito;