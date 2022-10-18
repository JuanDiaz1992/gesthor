
import "../stylesheet/Layaout.css"
import logoGesthor from "../Imagenes del Inicio/logoNavGesthor2.webp"
import React, {useState} from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { motion,useScroll} from "framer-motion"





function Layaout (){  
    
    const [clicked, setClicked] = useState(null)
    const handleClick = () =>{
        setClicked(!clicked)

    }

    const { scrollYProgress } = useScroll()


    

    return(
        <>
        <header className="header">
        <div className="contenedorNav">
        <nav className="nav">
        <div className="contenedor-logo">
            <img className="logoNavGesthor" id="logo" src={logoGesthor} alt="Gesthor"/>
        </div>
    
        <button className="nav_toggle" 
                aria-label="Abrir Menú"
                /*click={clicked} handleClick={handleClick}*/
                onClick={handleClick}>
                         <div className={`icon nav-icon-5 ${clicked? "open" : ""}`}
                         onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

            
        </button>

        <ul 
        className={`nav-menu ${clicked? "nav-menu_visible" : ""}`}>
            
            <li	li className="nav-menu-item">      
                <NavLink className="nav-menu-link nav-link" to="/Home"/* click={clicked} handleclick={handleClick}*/
                onClick={handleClick}>Qué hacemos</NavLink>
            </li>
            <li className="nav-menu-item">
                <NavLink to="/Nosotros" className="nav-menu-link nav-link "/* click={clicked} handleClick={handleClick}*/
                onClick={handleClick}>Nosotros</NavLink>
            </li>
            <li className="nav-menu-item">
                <NavLink to="/OtrosServicios" className="nav-menu-link nav-link " 
                onClick={handleClick}>Otros servicios</NavLink>
            </li>
            <li className="nav-menu-item">
                <NavLink to="/Contacto" className="nav-menu-link nav-link "
                onClick={handleClick}>Contacto</NavLink>
            </li>
        
        </ul>

    </nav>
    
    </div>
    </header>
    <motion.div className="BarraDesplazamiento" style={{ scaleX: scrollYProgress }}  />  
    <Outlet/>
    </>
    )



}


export default Layaout 