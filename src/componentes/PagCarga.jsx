import React from "react";
import Foto2 from "../Imagenes del Inicio/icono.webp"
import "../stylesheet/PagCarga.css"


function PagCarga(){
    return(
        <div className="preloader">
		<img className="logoPreloader" src={Foto2} alt="Gesthor"/>
		<h3 className="cargando">Cargando</h3>
	</div>

    )
}

export default PagCarga