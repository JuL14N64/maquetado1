import React from "react";

import Encabezado from "../Componentes/Encabezado";

import Mascota from "../Componentes/CYTHE";

//2 

function Categorias() {
    //3
    return (
        <>
            <Encabezado />
            <div className="container">
                <h1>Estas son las categorias de nuestra empresa:</h1>
                <Mascota/>
            </div>
        </>
    )
}

//4

export default Categorias;