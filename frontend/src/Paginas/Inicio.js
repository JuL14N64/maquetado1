

import React from "react";

import Encabezado from "../Componentes/Encabezado";

import "../css/inicio.css";



//2 

function Inicio() {
    //3
    return (
        <>
            <Encabezado />

            
               

             
                <main>
                    <div id="titulo">
                        <h1>EXPERTOS EN EQUIPO DE HERRAMIENTAS Y CONSTRUCCION</h1>
                    </div>
                    <div id="sub">
                        <h1>CITE: Innovación y calidad en herramientas para profesionales</h1>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.</p>
                    <div id="sub2">
                        <p>En CITE, no solo nos preocupamos por brindar productos de alta calidad, sino también por ofrecer un
                            servicio excepcional a nuestros clientes. Nuestro equipo de profesionales altamente capacitados y
                            comprometidos está siempre dispuesto a asesorar y brindar soluciones personalizadas, garantizando una
                            experiencia integral y satisfactoria. Además, nos esforzamos por mantenernos a la vanguardia de la
                            industria, invirtiendo en investigación y desarrollo para seguir innovando y ofreciendo soluciones que
                            impulsen el éxito de nuestros clientes.

                            Ya sea que necesite herramientas para la construcción, la industria automotriz, la carpintería o
                            cualquier otro ámbito profesional, en CITE encontrará la combinación perfecta de calidad, durabilidad y
                            rendimiento. Estamos orgullosos de ser reconocidos como un referente en el mercado de herramientas, y
                            trabajamos arduamente para mantenernos a la altura de nuestra reputación. Confíe en CITE para equiparse
                            con las mejores herramientas y lograr resultados excepcionales en cada proyecto.</p>
                    </div>
                    <img src={require("../images/soldando.png")} alt="Soldar" id="soldando"></img>
                    <img src={require("../images/madera.png")} alt="Madera" id="madera"></img>

                    
                </main>
                <footer>
                <p>Copyright © 2023 CITHE tools and machines</p>
                <p>Correo: cithe@experts.com Telefono: 899736212</p>
                </footer>
            

        </>
    )
}

//4

export default Inicio;