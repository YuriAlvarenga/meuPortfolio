import React, { useState } from "react"
import './sobreestesite.css'

import { BiArrowFromRight } from "react-icons/bi"
import { BiArrowFromLeft } from "react-icons/bi"

 
export default function SobreEsteSite(){
    const [menuLateral, setMenuLateral] = useState(true)
    const alternaMenuLateral =()=>{
        setMenuLateral(!menuLateral)
    }
    return(
        <div className="AbaSobreEsteSite">
            <div className={`"ContainerMenuSobreEsteSite" ${menuLateral ? "ContainerMenuSobreEsteSite" : "HiddenMenu"}`}>
                
                <div className="MenuSobreEsteSite">
                    <span className={menuLateral === true ? "BotaoFechaMenuLateral" : "HiddenBotao"}><BiArrowFromRight size={20} onClick={alternaMenuLateral} /></span>
                    <span className={menuLateral === true ? "HiddenBotao" : "BotaoAbreMenuLateral"} ><BiArrowFromLeft size={20} onClick={alternaMenuLateral}/></span>
                    <span className={`"" ${menuLateral ? "" : "HiddenLi"}`}>Menu</span>
                </div>
               <ul className="ListaMenuSobreEsteSite" >
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Construindo o Menu
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                       CSS
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Projetos
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Flip Card's
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Separando Pastas
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Conexão com o banco de dados
                    </li>
                    <li className={`"ItensMenuSobreEsteSite" ${menuLateral ? "ItensMenuSobreEsteSite" : "HiddenLi"}`}>
                        Dicas Sobre Portfólio
                    </li>

               </ul>
            </div>
        </div>
    )
}