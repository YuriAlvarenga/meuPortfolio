import React from "react"
import './sobreestesite.css'

import { IoIosCloseCircleOutline } from "react-icons/io"

export default function SobreEsteSite(){
    return(
        <div className="AbaSobreEsteSite">
            <div className="ContainerMenuSobreEsteSite">
                
                <div className="MenuSobreEsteSite">
                <span className="BotaoFechaMenuLateral"><IoIosCloseCircleOutline size={20}/></span>
                    Menu
                </div>
               <ul className="ListaMenuSobreEsteSite" >
                    <li className="ItensMenuSobreEsteSite">
                        Construindo o Menu
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                       CSS
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                        Projetos
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                        Flip Card's
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                        Separando Pastas
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                        Conexão com o banco de dados
                    </li>
                    <li className="ItensMenuSobreEsteSite">
                        Dicas Sobre Portfólio
                    </li>

               </ul>
            </div>
        </div>
    )
}