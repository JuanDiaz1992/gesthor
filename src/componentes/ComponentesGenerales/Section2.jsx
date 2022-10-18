import React from "react";
import "../../stylesheet/ComponentesGenerales/Section2.css"



/*Importaciones para efecto scroll*/
import { useInView } from "framer-motion"
import { useRef } from "react";



function Section2 (props){

    	/*Funciones para efecto scroll*/
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });


    return(
        <>


                <div className="imagen-contenedor3"
                			/*Efecto scroll aplicado al objeto*/
				    ref={ref} style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
				  }}>
                <img src={props.imagenMedio} alt="servicios"/>
                </div>

        </>
      
    )
}

export default Section2