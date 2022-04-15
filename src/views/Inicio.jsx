import React from "react"

import './inicio.css'

export default function Inicio(){
    return(
        <div className="Inicio">
            <div className="ConteudoInicio">
            <div className="FalandoSobreMim">
                <p>Olá, eu me chamo Yuri Alvarenga</p> 
            </div>
            <div className="SuporteCaixaComentario">
                
                <div className="CaixaComFormularios">
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="Digite o seu nome / Empresa"/>
                    <textarea placeholder="Deixe-me saber que você esteve aqui..."/>
                </div>
            </div>
            </div>
        </div>
    )
}