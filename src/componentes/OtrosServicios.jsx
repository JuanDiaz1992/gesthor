import React from "react";
import "../stylesheet/Otros Servicios/OtrosServicios.css"


import MainOtros from "./ComponentesGenerales/MainDefault"
import Section1 from "./ComponentesGenerales/Section1.jsx"
import Section2 from "./ComponentesGenerales/Section2"
import Section3 from "./ComponentesGenerales/Section3"
import Footer from "./ComponentesGenerales/Footer"


import Foto1 from "../Imagenes Otros Servicios/image17.webp"
import Foto2 from "../Imagenes Otros Servicios/image844.webp"
import Foto3 from "../Imagenes Otros Servicios/image36.webp"
import Foto4 from "../Imagenes Otros Servicios/image297.webp"



import GoToTop from "./FuncionesExternas/OnTop"

function OtrosServicios (){
    return(

            <div className="OtrosServicios">                    
                    
                    
                <main className="mainOtrosServicios">
                    <MainOtros className="mainOTros"
                        Banner={Foto1}
                        titular1="Consultoría"
                        titular2="Especializada"
                        />
                

                </main>


                <section className="InicioOtrosServicios" >
                    <Section1
                        foto={Foto4}
                        titulo="Otros servicios"
                        text1={[<div>
                            <p className="texto1OtrosServicios ">Certificación:</p>
                            <ul >            
                            <li>Acompañamiento en la certificación en RETIE de las distintas instalaciones eléctricas, basados en normativas y sus respectivas actualizaciones, RETIE 2008, RETIE 2013 y actualmente el RETIE 2017.</li><br/>
                            <li>Inspecciones en instalaciones internas básicas residenciales, comerciales e industriales.</li><br/>
                            <p className="texto1OtrosServicios ">Medidas a variables eléctricas:</p><br/>
                            <li>Medidas de puesta a tierra.</li><br/>
                            <li>Aislamiento eléctrico en baja y media tensión</li><br/>
                            <li>Resistividad de terreno.</li><br/>
                            <li>Continuidad eléctrica</li><br/>
                            <p className="texto1OtrosServicios ">Análisis de cargas</p>

                                </ul></div>]}/>
                </section>


                <section className="seccion2OtrosServicios" >

                    <Section2
                    imagenMedio={Foto3}/>


                </section>


                <section className="seccion3seccion2OtrosServicios">

                    <Section3
                    ImagInicio3={Foto2}
                    titulo3={""}
                    texto3={<div className="tercerTexto">Análisis de sistema de cargabilidad  en tableros de distribución y funciones especificas de una instalación eléctrica (Analizador de Redes) Pruebas VLF (Voltage Low Frecuencia).<br/><br/>
                    Proyección de las empresas:<br/><br/>
                    <strong>
                    Certificación:</strong><br/><br/>
                    <ul>
                        <li>Inspección e instalaciones de alumbrado interior y exterior.</li>
                        <li>Inspección a instalaciones especiales y ambientes clasificados.</li>
                    </ul><br/><br/>
                    Certificación individual de ascensores, escaleras eléctricas y puertas automáticas. <br/>

                    Instalación e implementación de energías renovables y auto sostenibles.


                    
                    
                    </div>}
                    link={""}
                    />

                </section>

                <footer className="footer">
                <Footer/>

                </footer>

                <GoToTop />





            </div>



    )
}

export default OtrosServicios