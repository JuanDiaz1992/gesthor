import React from "react";
import Banner1 from "../../Imagenes Nosotros/BannerInt.webp"
import Banner1M from "../../Imagenes Nosotros/BannerIntMovil.webp"
import "../../stylesheet/Nosotros/Section2Nosotros.css"


/*Importaciones para efecto scroll*/
import { useInView } from "framer-motion"
import { useRef } from "react";


function Section2Nosotros (){


	/*Funciones para efecto scroll*/
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

    return(
        <>
		<div className="seccion2__contenedor-tarjeta"
			/*Efecto scroll aplicado al objeto*/
				ref={ref} style={{
					transform: isInView ? "none" : "translateX(-200px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
				  }}
		
		
		>
			<div className="imagen-contenedor3Nosotros">
				<img className="div_img div_img--escritorio"	src={Banner1} alt=""/>
				<img className="div_img div_img--movil" 	src= {Banner1M} alt=""/>
				<div className="section__divcontainer">

					<div className="section__contenedorListados">
					<ul className="section__ul">
						<h3 className="section__ul--h3">Certificación de instalaciones eléctricas bajo cumplimiento RETIE.</h3>
						<li className="section__ul--li">Uso final para instalaciones comerciales.</li>
						<li className="section__ul--li">Uso final para instalaciones industriales.</li>
						<li className="section__ul--li">Uso final para instalaciones residenciales.</li>
						<li className="section__ul--li">Redes de distribución incluyendo transformación.</li>
						<li className="section__ul--li">Áreas clasificadas y ambientes especiales</li>
					</ul>
					<ul className="section__ul">
						<h3 className="section__ul--h3">Certificación de instalaciones eléctricas en iluminación bajo cumplimiento RETILAP.</h3>
						<li className="section__ul--li">Instalaciones interiores: Túneles, oficinas, locales comerciales, zonas comunes, lugares de alta concentración de persona </li>
						<li className="section__ul--li">Instalaciones exteriores: Monumentos, alumbrado público, parques o estadios.</li>

					</ul>

						
					</div>
				</div>
			</div>
		</div>
	</>
    )
}

export default Section2Nosotros