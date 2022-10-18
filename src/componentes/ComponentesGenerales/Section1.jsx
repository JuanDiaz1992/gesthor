import React from "react";
import "../../stylesheet/ComponentesGenerales/Section1.css"



function Section1(props){
    return(
        <>
            <div className="inicio__contenedor-tarjeta">
                <div className="contenedor-internoImgText">
                    <div className="imagen-contenedor2">
                        <img className="Imgeninicio2" src={props.foto} alt="Ingeniero Electrico"/>
                    </div>			
                    <div className="contenedor-texto">
                        <div className="cont-texAndLine">
                            <div>
                                <h1 className="Titulo-principal">{props.titulo}</h1>
                            </div>
                            <div className="linea">
                            </div>
                        </div>
                        <div className="texto1 animacionScroll">
                            {props.text1}
                        </div>
                        <div>{props.link1}</div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Section1