import React from "react"
import './habilidades.css'


export default function ComponenteHabilidade(props) {
    
    return(
        <div>
            <div >
                <div className="ComponenteBotaoHabilidade"><img className="ImagemHabilidade" src={props.imagem} alt="html" /></div>
            </div>
            {props.titulo}
        </div>
    )   
}