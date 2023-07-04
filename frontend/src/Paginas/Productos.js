

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/producto.css";

//2 

function Productos() {
    //3
    return (
        <>
            <Encabezado />
            <body>
                
                <main>
                    <div className="contenedor">
                        <img src={require("../images/caja herramientas.png")} class="caja"></img>
                        <img src={require("../images/destornillador.png")} class="destor"></img>
                        <img src={require("../images/mazo.png")} alt="" class="mazo"></img>
                        <img src={require("../images/taladro.png")} alt="" class="taladro"></img>
                        <img src={require("../images/cierra.png")} alt="" class="cierra"></img>
                    </div>
                </main>
            </body>
        </>
    )
}

//4

export default Productos;

