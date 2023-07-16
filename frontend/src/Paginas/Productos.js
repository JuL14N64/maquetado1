

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/producto.css";

import Mascota from "../Componentes/CYTHE";

//2  <img src={require("../images/imagen1.png")} alt="Imagen 1"></img>

function Productos() {
    //3
    return (
        <>
            <Encabezado />
            <body>
                <main>
                    <div className="contenedor">

                        <Mascota></Mascota>



                    </div>
                </main>
            </body>
        </>

    )
}

//4

export default Productos;

