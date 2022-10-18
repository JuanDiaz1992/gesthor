import React from "react";
import "../../stylesheet/ComponentesGenerales/Footer.css"
import { AiOutlinePhone,AiOutlineMail,AiOutlineMobile,AiOutlineWhatsApp } from "react-icons/ai";
import Footerimg from "../../Imagenes del Inicio/footerimg.webp"
import FooterMoimg from "../../Imagenes del Inicio/footerimgMovil.webp"

function Footer (){
    return(
        <>
        	<footer className="footer">


            <div className="content_textAndIcos">
            <div className="content_text"><h2 className="p_footer">Realizamos diseños y asesorías de instalaciones electricas<br/>a nivel nacional</h2>
            </div>


            <div className="contenedor-iconos ">
                <a className="link-ico" href="Home">
                    <AiOutlinePhone className="icono"/>
 
                </a>
                    


                <a className="link-ico" href="Home">
                    <AiOutlineMail className="icono"/>
 

                </a>



                <a className="link-ico" href="Home">
                    <AiOutlineMobile className="icono"/>
  
                </a>

                <a className="link-ico" target="blank" href="https://wa.me/573206504506?text=Buen%20d%C3%ADa%20Gesthor.%20Quiero%20contactarme%20con%20ustedes" >
                    <AiOutlineWhatsApp className="icono"/>
 
                </a>


    
            </div>
        
            </div>


            <div className="content-img5">
                <img className="imagen5" src={Footerimg} alt=""/>
            </div>

            <div className="content-imgMovil">
                <img className="imagen5Movil" src={FooterMoimg} alt=""/>
            </div>






            </footer>
        </>
    )
}


export default Footer