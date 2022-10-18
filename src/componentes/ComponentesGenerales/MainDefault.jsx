import React from "react";
import "../../stylesheet/ComponentesGenerales/MainDefault.css"

import Cuadrado from "../../Imagenes Nosotros/Cuadrado.png"
import { useEffect, useState } from "react";
import classNames from "classnames";

function MainDefault(props){
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

            <div className="parteInicialBanner">
                <img className="Imgeninicio" src={props.Banner} alt="Ciudad"/>
                <div className={classNames ("contenedor-cuadradoN", { "animacionCInicial": playAnimation })}>
                <img className="CuadradoInicio" src={Cuadrado} alt=""/>
                </div>
                <div className={classNames ("TextoprincipalBanner", { "AnimacionAparecer": playAnimation })}>
                    <p className="textBanner SubTituloBanner">{props.titular1}</p>
                <h2 className="textBanner TituloBanner">{props.titular2}</h2></div>
            </div>

        </>
    )
}

export default MainDefault


