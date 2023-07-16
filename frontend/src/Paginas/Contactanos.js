

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/Contactanos.css";

//2 

function Contactanos() {
    //3
    return (
        <>
        <Encabezado />
        <body>
          <main>
            <section>
              <h2 id="contact-title">Contáctanos</h2>
              <div id="contact-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan, ligula sit amet aliquam dictum, diam leo fringilla est, vel consequat velit tellus eu lectus. Sed sed felis quis turpis iaculis bibendum. Etiam ut libero vitae felis rhoncus pharetra. Suspendisse ut enim ac ipsum iaculis accumsan. Nunc malesuada condimentum magna id lobortis. Ut dignissim auctor convallis. Pellentesque tristique placerat diam ac venenatis.</p>
              </div>
              <div id="social-media">
                <img src={require("../images/facebook.png")} alt="Facebook"></img>
                <img src={require("../images/twitter.png")} alt="Twitter"></img>
                <img src={require("../images/instagram.png")} alt="Instagram"></img>
                <img src={require("../images/watsap.png")} alt="watsap"></img>
              </div>
            </section>
            
            <section id="contact-form-section">
              <h2>Contacto</h2>
              <form id="contact-form">
                <div class="form-group">
                  <label for="comentarios">Comentarios:</label>
                  <textarea id="comentarios" name="comentarios" placeholder="Escribe tus comentarios aquí"></textarea>
                </div>
                <div class="form-group">
                  <label for="correo">Correo:</label>
                  <input type="email" id="correo" name="correo" placeholder="Tu correo electrónico"></input>
                </div>
                <button type="submit">Enviar</button>
              </form>
            </section>
          </main>
          <footer>
            <p>Copyright © 2023 CITHE tools and machines</p>
            <p>Correo: cithe@experts.com Telefono: 899736212</p>
          </footer>
        </body>
      </>
      
    )
}

//4

export default Contactanos;