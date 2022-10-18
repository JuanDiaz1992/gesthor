import React from "react";
import "../../stylesheet/ComponentesGenerales/Section3.css"



/*Importaciones para efecto scroll*/
import { useInView } from "framer-motion"
import { useRef } from "react";





function Section3 (props){


    	/*Funciones para efecto scroll*/
		const ref = useRef(null);
		const isInView = useInView(ref, { once: true });
	
    return(
        <>

		<div className="seccion3__contenedor-tarjeta"
		              			ref={ref} style={{
									transform: isInView ? "none" : "translateY(200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
								  }}
				    >
			<div className="contenedor-internoImgText3">
				<div className="imagen-contenedor4">
					<img className="Imgeninicio3" src= {props.ImagInicio3} alt="Ingeniero Electrico"/>
				</div>
				<div className="contenedor-texto2">
					<div className="cont-texAndLine animacionScroll">
						<h2 className="Titulo-principal3 ">{props.titulo3}</h2>
						<div className="linea">
						</div>
					</div>
					<p className="texto3" >{props.texto3}</p>
					<div>{props.link}</div>
				</div>
			</div>
		</div>
		



        </>
    )
}

export default Section3