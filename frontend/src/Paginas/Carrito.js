

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