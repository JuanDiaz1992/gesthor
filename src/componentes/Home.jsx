import React from "react";
import "../stylesheet/index/Home.css"

import BannerTriangular from "./ComponentesGenerales/BannerTriangular"
import Section1 from "./ComponentesGenerales/Section1.jsx"
import Section2 from "./ComponentesGenerales/Section2"
import Section3 from "./ComponentesGenerales/Section3"
import Footer from "./ComponentesGenerales/Footer"


import CuadroAzulBanner from "../Imagenes del Inicio/bitmap.webp"
import Banner from "../Imagenes del Inicio/banner2.webp"
import ImagInicio1 from "../Imagenes del Inicio/ImgInicio2-0.webp"
import ImagInicio2 from "../Imagenes del Inicio/ImgInicio3.webp"
import ImagInicio3 from "../Imagenes del Inicio/image1373.webp"

import GoToTop from "./FuncionesExternas/OnTop"

import { NavLink } from 'react-router-dom';





/*Para el efecto scroll*/




function Home (){


    return(
        <div className="home">

    
    
    
    <main className="main">
      <BannerTriangular
      Banner={Banner}
      CuadroAzulo={CuadroAzulBanner}
      textoTitulo={"Creamos soluciones de"}
      h32={"Ingenieria"}
      h31={"Electrica"}/>
      

    </main>


    <section className="Inicio" >
      <Section1
      foto={ImagInicio1}
      titulo="Bienvenidos a Gesthor"
      text1={[<p>Somos un grupo de <span className="negritas">ingenieros </span> comprometidos con el <span className="negritas">medio ambiente </span>las personas y los animales, aplicando <span className="negritas">normas técnicas </span>colombianas basadas en los reglamentos, en función de mitigar o evadir cualquier riesgo eléctrico que pueda presentarse</p>]}
      comunicate="Comunicate con nosotros, trabajamos en toda Colombia"
      link1={< NavLink className="contactanos" to="/Contacto" ><p>Comunicate con nosotros</p><p>trabajamos en toda Colombia</p></NavLink>}
 
      
      />
    </section>


    <section className="seccion2" >
      <Section2 
      imagenMedio={ImagInicio2}
          />

    </section>

    <section className="seccion3">
      <Section3
      ImagInicio3={ImagInicio3}
      titulo3={"Somos profesionales"}
      texto3={<>Conformamos un equipo humano altamente capacitado para asesorar a nuestros clientes sobre la normativa <span className="negritas">RETIE</span>; y así, evitar los sobre costos y retrasos en la energización de sus proyectos.<br/><br/>
      Somos <span className="negritas">gestores estratégicos</span> para todos los servicios donde intervienen la electricidad (consultoría, diseño y construcción) bajo la norma <span className="negritas">RETIE./RETILAP.</span> </>}
      link={<NavLink to="/Contacto" className="contactanos" >Conoce más sobre nosotros
      </NavLink>}
      />


    </section>

    <footer className="footer">
      <Footer/>

    </footer>

    <GoToTop />





        </div>

    )
}



export default Home