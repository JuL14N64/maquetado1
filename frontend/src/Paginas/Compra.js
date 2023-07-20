import React from "react";
import "../css/Compra.css";

import Encabezado from "../Componentes/Encabezado";
import PagoImage from "../images/pago.png";

function Compra() {
  return (
    <>
      <Encabezado />

      <main>
        <div id="formulario">
          <div className="campo">
            <label htmlFor="nombre-apellido">Nombre y Apellido:</label>
            <input type="text" id="nombre-apellido" placeholder="Ingrese su nombre y apellido" />
          </div>
          <div className="campo">
            <label htmlFor="numero">Número:</label>
            <input type="text" id="numero" placeholder="Ingrese su número de teléfono" />
          </div>
          <div className="campo">
            <label htmlFor="numero-tarjeta">Número de Tarjeta:</label>
            <input type="text" id="numero-tarjeta" placeholder="Ingrese el número de su tarjeta" />
          </div>
          <div className="campo">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" placeholder="Ingrese el CVV de su tarjeta" />
          </div>
          <button id="comprar">Comprar ahora</button>
        </div>

        <h1 id="mensaje">DISFRUTA TU PRODUCTO!</h1>

        <p id="textopago">
          En nuestra página web, entendemos la importancia de ofrecerte una experiencia de compra fluida
          y segura desde el inicio hasta el final. Por eso, hemos desarrollado un sistema de pago en línea confiable y
          de vanguardia que te permitirá realizar tus transacciones de manera segura y sin complicaciones.
        </p>

        <img src={PagoImage} alt="Pago" id="pago" />
      </main>

      <footer>
        <p>Copyright © 2023 CITHE tools and machines</p>
        <p>Correo: cithe@experts.com Telefono: 899736212</p>
      </footer>
    </>
  );
}

export default Compra;
