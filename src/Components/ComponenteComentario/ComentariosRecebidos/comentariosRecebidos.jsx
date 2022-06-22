import React from "react"
import './comentariosRecebidos.css'

export default function comentariosRecebidos({empresa, comentario}){
    return(
        <div className="Container">
            <div className="SuporteContainer">
                <div className="NomeEmpresa"> {empresa}</div>
                <div className="ComentariosFeitos">
                    <p>{comentario}</p>  
                </div>
            </div>
        </div>
    )
}