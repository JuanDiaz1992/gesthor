import React from "react";
import { useEffect, useState } from "react";
import classNames from "classnames";
import "../../stylesheet/ComponentesGenerales/BannerTriangular.css"

import { motion} from "framer-motion"



function Main (props){

  // This will run one time after the component mounts
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);



    return(
        <>
        	<div className="parteInicial">
			<img className="imgeninicio" src={props.Banner} alt="Electrica"/>

			<motion.div 
       initial={{ y: "-100%" }}
       animate={{ y: "0" }}
       transition={{ duration: 2}}
      className="contenedorCuadrado ">
			<img className="CuadradoImgeninicio" src={props.CuadroAzulo}alt="Cuadro azul"/>

			</motion.div>
			<div className={classNames ("textBanner__content", { "AnimacionAparecer": playAnimation })}

            >
				<p className="textBanner__SubTituloBanner--p">{props.textoTitulo}</p>
				<h3 className="textBanner__h3--2">{props.h32}</h3>
				<h3 className="textBanner__h3--1">{props.h31}</h3>
			</div>
		


	        </div>	
        </>
    )
}

export default Main