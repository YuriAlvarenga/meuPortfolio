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
                <FiMenu size={30} color="#eee"/> 
                : <MdClose size={30}
                color="#eee"/>}
            </button>
            <ul className={`hiddenMenu ${menuAberto ? "hiddenMenu" : "menuNav"}`}>
                <li>
                   <Link to="/"><ImHome/></Link>
                </li>
                <li>
                   <Link to="/Inicio">Início</Link>
                </li>
                <li>
                    <Link to="/Habilidade">Habilidades</Link>
                </li>
                <li>
                    <Link to="#">Projetos</Link>
                </li>
                <li>
                    <Link to="/Curriculo">Currículo</Link>
                </li>
                <li>
                    <Link to="#">Sobre este site</Link>
                </li>
            </ul>
        </nav>
    )
}