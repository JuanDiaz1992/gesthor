import React from "react";
import "../../stylesheet/Contacto/BannerTriangularContacto.css"
import logo from "../../Imagenes Contacto/LogoBanner.webp"





function BannerTriangularContacto (props){
    return(
        <>        	
        <div className="parteInicialContacto">
            <img className="imgeninicioContacto" src={props.Banner} alt="Electrica"/>            
            <div className="parteInicialContacto__div__container">
                <img className="LogoContacto" src={logo} alt="" />                
                <h2 className="H2Contacto">Creamos soluciones en ingeniería eléctrica</h2>
            </div>



    


        </div>	
        </>

    )
}

export default BannerTriangularContacto