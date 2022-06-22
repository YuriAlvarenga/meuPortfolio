import React from "react"
import './formularioEnviar.css'

export default function FomularioEnviar(){
    return(
        <form className="FormularioContato">
            <input type="text" name="" id="username" className="textInput" autoComplete="off"
                placeholder="Digite seu nome"
            />
            <input type="email" name="" id="username" className="textInput" autoComplete="off"
                placeholder="Digite seu e-mail"
            />
            <textarea className="InputAreaContato" placeholder="Deixe um recado para mim :)"/>
            <button className="BotaoContato">ENVIAR</button>
        </form>
    )
}