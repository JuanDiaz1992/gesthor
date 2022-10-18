import React from "react";
import "../stylesheet/Contacto/Contacto.css"

import Banner4 from "./Contacto/BannerTriangularContacto"
import FormularioContacto from "./Contacto/FormularioContacto"
import Footer from "./ComponentesGenerales/Footer"

import Banner from "../Imagenes Contacto/BannerContacto.webp"

import GoToTop from "./FuncionesExternas/OnTop"


function Contacto(){
    return(
        <>
            <div className="contacto">
                <Banner4
                Banner={Banner}/>     

                <FormularioContacto/>
                
                <Footer/>


                <GoToTop />
            </div>
        </>
    )
}


export default Contacto