import React from "react";
import "../../stylesheet/Contacto/Formulario.css";
import emailjs from "emailjs-com";
import {useState} from "react";


function FormularioContacto (){


    const [enviado, setEnviado] = useState(false);
    /*const navigate = useNavigate(); */
    const handleSubmit = (event) => { 
        event.preventDefault();
        /*Con este hooks se cambia el formulario por un mensaje cuando se envía el correo*/
        setEnviado(true)


    };
    
    /*Esta es la función para el envío del correo por medio de emailjs*/

    const [from_name, set_ToName] = useState("");
    const [formEmail, set_Toemail] = useState("");
    const [formText, set_Totext] = useState("");
/*
    const [botonNulo, setBoton] = useState(false);

*/
 


    
    

    const submitInfo = () => {
        console.log(from_name + formEmail + formText );

        const emailContent= {
            from_name: from_name,
            formText:formText,
            formEmail:formEmail,

        };


    emailjs.send('service_npopafu', 'templatewdwawdasdaw_a92yuia',emailContent, 'ubhhuwpIV-yGaawdasdawPpNRY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    /*hasta aquí es la función para el envío de correo*/
        
     }



       

    return(
        <>
        <div className="formulario__container">
            <div className="formulario__container__div--informacion">
                
                <div className="containerTextAndLine">
                    <h2 className="h2Contacto">Dónde estamos</h2>
                    <div className="lineaContacto">
                    </div>  
                </div>
                <div className="containerDatos">
                    <h4 className="h4Contacto">Dirección:</h4>
                    <p>Calle 94 # 72A - 51<br/>Parque Largartos - -Bogotá</p>
                    <h4 className="h4Contacto">Celular:</h4>
                    <p>3206504506</p>
                    <h4 className="h4Contacto">E-mail:</h4>
                    <p>ingenieria@gesthor.com.co</p>
                </div>             

            </div>
            <div className={enviado? "hiden":"formulario__container__div--formulario"}>
                <h3>Estaremos encantados de leerlo</h3>
                    
                <form className="Form__container" onSubmit={handleSubmit}>                   
                    <div className="containerGrid">
                    <input type="text" className="formName" placeholder="Nombre"
                    value= {from_name}
                    onChange={(event)=>{set_ToName(event.target.value)}}required/>
                    

                    <input type="email" className="formEmail"  placeholder="Correo electrónico"
                    onChange={(event)=>{set_Toemail(event.target.value)}} required/>


                    <textarea type="text"  className="formText" placeholder="Mensaje" 
                    onChange={(event)=>{set_Totext(event.target.value)}} required/>
                    

                    </div>

                    <div className="divFlexButton" >
                        <button className="ButtonEnviar" type="submit" value="Enviar         formulario" onClick={submitInfo}>Enviar</button>
                    </div>
                </form>            
  
            </div>


            <div className={enviado? "formulario__container__div--enviado":"hiden"}>                  
                    <h3>Su mensaje fue enviado con exíto, pronto estaremos en contactando</h3>
                    
            </div>

                
                
        </div>
        
        </>

    )
}

export default FormularioContacto



