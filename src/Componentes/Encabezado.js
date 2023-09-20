import React from 'react'

import { GiHamburgerMenu } from 'react-icons/gi';
import {BsWhatsapp} from 'react-icons/bs';
export const Encabezado = () => {
  return (
    <div>
       <link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@600&family=Heebo:wght@900&family=Outfit:wght@100;500;800&family=Poppins:wght@200;400;600&family=Roboto:ital,wght@0,100;1,100&display=swap" rel="stylesheet"></link>
        <header className="header">
         
        <ul className='navegador titulo'>
        <a href="saferent.mx"><img className="logo" src="/Logosolo.png" alt=""/> <h1 className='Logoname'>SAFE HOME&RENT</h1>    </a>
            <li><a href="">Inicio</a></li>
            <li><a href="">Servicios</a>
            <ul className='desplego'>
              <li><a href="">Poliza juridica</a></li>
              <li><a href="">Investigaciones</a></li>
              <li className='ultimo'><a href="">Compra y Renta</a></li>
            </ul></li>
           
            <li><a href="">Protecciones</a></li>
            <li><a href="">Usuarios</a><ul className='desplego'>
              <li><a href="">Asesor</a></li>
              <li><a href="">Propietario</a></li>
              <li className='ultimo'><a href="">Inquilino</a></li>
            </ul> </li> 
            
            <li><a href="">Contacto</a></li>  
        </ul>
        <a href=""> <button className='btnt' > <div className='whatsap'><BsWhatsapp size={20}/></div><div className='nombri'>WhatsApp</div></button></a> 
    </header>
       
 
        
         
    </div>
    
  )
}
