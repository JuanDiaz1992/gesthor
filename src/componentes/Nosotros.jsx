import React from "react";
import "../stylesheet/Nosotros/Nosotros.css"
import { NavLink } from 'react-router-dom';

import MainNosotros from "./ComponentesGenerales/MainDefault"
import Section1 from "./ComponentesGenerales/Section1.jsx"
import Section2 from "./NosotrosComponest/Section2Nosotros.jsx"
import Section3 from "./NosotrosComponest/Section3Nosotros.jsx"


import Foto2 from "../Imagenes Nosotros/image172.webp"
import Banner2 from "../Imagenes Nosotros/BannerN.webp"

import Footer from "./ComponentesGenerales/Footer"



import GoToTop from "./FuncionesExternas/OnTop"





function Nosotros(){






    return(
        <div className="Nosotros">
          <main className="mainNosotros">
            <MainNosotros 
            Banner={Banner2}
            titular1="Conoce nuestros"
            titular2="Servicios"/>         

          </main>


          <section className="InicioNosotros">
            <Section1
              foto={Foto2}
              titulo="Trabajamos para usted"
              text1={[<div>
                <p className="texto1Nosotros animacionScroll">Nuestros servicios:</p>
                <ul className="animacionScroll">            
                  <li>Diseño y construcción de instalaciones eléctricas de tipo: Industrial, comercial, residencial.</li><br/>
                  <li>Instalaciones especiales como: hospitalarias, ambientes explosivos, plantas de gas, estaciones de servicio y en redes de distribución.</li><br/>
                  <li>Diseños de iluminación, instalaciones interiores y exteriores.</li>
                </ul></div>]}
              comunicate="Comunicate con nosotros, trabajamos en toda Colombia"
              link1={< NavLink className="contactanos" to="/Contacto" >Comunicate con nosotros</NavLink>}
 
        
            
            />
          </section>


          <section className="seccion2Nosotros">
            <Section2/>
          </section>


          <section className="seccion3Nosotros">
            <Section3/>
          </section>


          <footer className="footer">
             <Footer/>
          </footer>

          <GoToTop />

        
        </div>

    )
}

export default Nosotros