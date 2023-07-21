

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Compra.css";

//2 

function Compra() {
    //3
    return (
        <>
            <Encabezado />

          

            <main>
                <div id="formulario">
                    <div className="campo">
                        <label for="nombre-apellido">Nombre y Apellido:</label>
                        <input type="text" id="nombre-apellido" placeholder="Ingrese su nombre y apellido"></input>
                    </div>
                    <div className="campo">
                        <label for="numero">Número:</label>
                        <input type="text" id="numero" placeholder="Ingrese su número de teléfono"></input>
                    </div>
                    <div className="campo">
                        <label for="numero-tarjeta">Número de Tarjeta:</label>
                        <input type="text" id="numero-tarjeta" placeholder="Ingrese el número de su tarjeta"></input>
                    </div>
                    <div className="campo">
                        <label for="cvv">CVV:</label>
                        <input type="text" id="cvv" placeholder="Ingrese el CVV de su tarjeta"></input>
                    </div>
                    <button id="comprar">Comprar ahora</button>
                </div>
                <h1 id="mensaje">DISFRUTA TU PRODUCTO!</h1>

                <p id="textopago"></p>

            </main>

           

        </>
    )
}

//4

export default Compra;