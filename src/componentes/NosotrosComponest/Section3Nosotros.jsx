import React from "react";
import "../../stylesheet/Nosotros/Section3Nosotros.css"


/*Importaciones para efecto scroll*/
import { useInView } from "framer-motion"
import { useRef } from "react";

function Section3Nosotros(){

	/*Funciones para efecto scroll*/
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
  
    return(
        <>

		<div className="seccion3__contenedor-tarjetaN"
					/*Efecto scroll aplicado al objeto*/
		ref={ref} style={{
			transform: isInView ? "none" : "translateY(200px)",
			opacity: isInView ? 1 : 0,
			transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
		  }}>
			<div className="contenedor-text2">
				<div className="cont-texAndLine">
					<h2 className="Titulo-principalNosotros">Asesoría personalizada</h2>
					<div className="lineaSection3"></div>
				</div>	
				<ul className="seccion3__ul">
					<li className="seccion3__ul--li">Atención especializada toda Colombia</li>
					<li className="seccion3__ul--li">Certificación de instalaciones RETIE</li>
					<li className="seccion3__ul--li">Certificación de instalaciones RETILAP</li>
					<li className="seccion3__ul--li">Medición de variables eléctricas</li>
					<li className="seccion3__ul--li">Consultoria especializada</li>
				</ul>
			</div>
		</div>			


        </>
    )
}

export default Section3Nosotros