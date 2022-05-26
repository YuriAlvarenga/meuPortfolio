import React from "react"
import './inicio.css'


import ComponenteCardSobreMim from "../../Components/ComponenteSobreMim/ComponenteCardSobreMim"
import Habilidade from "../abaHabilidade/Habilidades"
import Comentario from "../../Components/ComponenteComentario/ComponenteComentario"
import HTML from '../../Imagens/logos/html.png'
import JS from '../../Imagens/logos/js.png'
import PYTHON from '../../Imagens/logos/python.png'

export default function Inicio(){

    return(
            <div>
                <div className="TituloSobreMim">
                    <h2>SEJA BEM-VINDO AO MEU PORTFÓLIO !</h2>
                </div>
    
                <Habilidade/>
                <div className="QuadroDestaques">
                    <div className="TituloDestaques"><h2>DESTAQUES</h2></div>
                    <div className='CardSobreMim'>
                        <ComponenteCardSobreMim titulo ="Calculadora" img = {HTML}/>
                        <ComponenteCardSobreMim titulo = "To-do List" img = {JS}/>
                        <ComponenteCardSobreMim titulo= "Netflix" img = {PYTHON}/>
                        
                    </div>
                </div>
                <Comentario/>
            </div>
    )
}