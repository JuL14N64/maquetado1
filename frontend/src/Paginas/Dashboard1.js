

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Dashboard.css";

//2 

function Carrito() {
    //3
    return (
        <>
            <Encabezado />
            <>




                <h1>Dashboard</h1>
                <div className="image-container">
                    <div className="item">
                        <img src={require("../images/categoria.png")} alt="Categoría"></img>
                        <div className="item-overlay">
                            <button className="button">Ver categoría</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../images/productos.png")} alt="Productos"></img>
                        <div className="item-overlay">
                            <button className="button">Ver productos</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../images/pedidos.png")} alt="Pedidos"></img>
                        <div className="item-overlay">
                            <button className="button">Ver pedidos</button>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("../images/usuarios.png")} alt="Usuarios"></img>
                        <div className="item-overlay">
                            <button className="button">Ver usuarios</button>
                        </div>
                    </div>
                </div>

            </>



        </>
    )
}

//4

export default Carrito;