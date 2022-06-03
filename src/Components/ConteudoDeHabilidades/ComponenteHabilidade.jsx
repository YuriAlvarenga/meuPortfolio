import React from "react"
import './habilidades.css'


export default function ComponenteHabilidade(props) {
    
    return(
        <div>
            <div >
                <button className="ComponenteBotaoHabilidade"><img className="ImagemHabilidade" src={props.imagem} alt="html" /></button>
            </div>
            {props.titulo}
        </div>
    )   
}