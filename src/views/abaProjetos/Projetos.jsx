import React from "react"
import ConteudoAbaProjeto from "../../Components/ConteudosDeProjetos/ConteudoAbaProjetos"
import './projetos.css'


function Projeto(){
    return(
        <>
            <div className="PaginaProjetos">
                <ConteudoAbaProjeto/>
                <ConteudoAbaProjeto/>
                <ConteudoAbaProjeto/>
            </div>
        </>
    )
}
export default Projeto