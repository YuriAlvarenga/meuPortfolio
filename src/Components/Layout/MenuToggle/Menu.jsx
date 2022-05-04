import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import { ImHome } from "react-icons/im"
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

import '../MenuToggle/menu.css'

export default function Menu (props){
    const [menuAberto, setMenuAberto] = useState(true)
   
    const handleToggle = () => {
        setMenuAberto(!menuAberto)
      }
    
    return(
        <nav className="Menu">
            <button className="buttonToggle" 
                onClick={handleToggle}> {menuAberto ?
                <FiMenu size={30} color="#eee"/> :
                <MdClose size={30} color="#eee"/>}
            </button>
            <ul className={`hiddenMenu ${menuAberto ? "hiddenMenu" : "menuNav"}`}>
                <Link to="/" className="selected"><ImHome/></Link>
                <Link to="/Inicio" className="selected">Início</Link>
                <Link to="/Habilidade" className="selected">Habilidades</Link>
                <Link to="#" className="selected">Projetos</Link>
                <Link to="/Curriculo" className="selected">Currículo</Link>
                <Link to="#" className="selected">Sobre este site</Link> 
            </ul>
        </nav>
    )
}