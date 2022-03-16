import React, { useState } from "react"

import './habilidades.css'
import Conteudo from "../Components/Conteudos/Conteudo"

const Habilidade = () => {

    const [mostraConteudoPython, setEscondeConteudo]  = useState(true)
    const mostrnadoHabilidadePython =()=>{
        setEscondeConteudo(!mostraConteudoPython)
    }
    const [mostraConteudoHtml, setEscondeConteudoHtml]  = useState(true)
    const mostrnadoHabilidadeHtml =()=>{
        setEscondeConteudoHtml(!mostraConteudoHtml)
    }
    const [mostraConteudoCss, setEscondeConteudoCss] = useState(true)
    const mostrandoHabilidadeCss = ()=>{
        setEscondeConteudoCss(!mostraConteudoCss)
    }
    const [mostraConteudoJavascript, setEscondeConteudoJavascript] = useState(true)
    const mostrandoHabilidadeJavascript = ()=>{
        setEscondeConteudoJavascript(!mostraConteudoJavascript)
    }
    const [mostraConteudoReact, setEscondeConteudoReact] = useState(true)
    const mostrandoHabilidadeReact = ()=>{
        setEscondeConteudoReact(!mostraConteudoReact)
    }
    const [mostraConteudoGit, setEscondeConteudoGit] = useState(true)
    const mostrandoHabilidadeGit = ()=>{
        setEscondeConteudoGit(!mostraConteudoGit)
    }
    return(
        <div className="PaginaHabilidade">
                <button className="HabilidadePython"
                    onClick={mostrnadoHabilidadePython}>
                    Python
                </button>
                <div className={`Conteudo ${mostraConteudoPython  ? "HiddenConteudo" : ""}`} >
                    <Conteudo/>
                </div>
                <button className="HabilidadeHtml" 
                    onClick={mostrnadoHabilidadeHtml}>
                    HTML
                </button>
                <div className={`Conteudo ${mostraConteudoHtml ? "HiddenConteudo" : ""}`}>
                    <Conteudo/>
                </div>
                <button className="HabilidadeCss"
                    onClick={mostrandoHabilidadeCss}>
                    CSS
                </button>
                <div className={`Conteudo ${mostraConteudoCss ? "HiddenConteudo" : ""}`}>
                    <Conteudo/>
                </div>
                <button className="HabilidadeJavascript"
                    onClick={mostrandoHabilidadeJavascript}>
                    JAVASCRIPT
                </button>
                <div className={`Conteudo ${mostraConteudoJavascript ? "HiddenConteudo" : ""}`}>
                    <Conteudo/>
                </div>
                <button className="HabilidadeReact"
                    onClick={mostrandoHabilidadeReact}>
                    REACT
                </button>
                <div className={`Conteudo ${mostraConteudoReact ? "HiddenConteudo" : ""}`}>
                    <Conteudo/>
                </div>
                <button className="HabilidadeGit"
                    onClick={mostrandoHabilidadeGit}>
                    GIT E GITHUB
                </button>
                <div className={`Conteudo ${mostraConteudoGit ? "HiddenConteudo" : ""}`}>
                    <Conteudo/>
                </div>
        </div>
    )
}
export default Habilidade