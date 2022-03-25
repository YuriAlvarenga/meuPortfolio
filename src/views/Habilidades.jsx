import React, { useState } from "react"

import './habilidades.css'
import Conteudo from "../Components/ConteudosDeHabilidades/Conteudo"



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
                <div className="Habilidades"
                    onClick={mostrnadoHabilidadePython}>
                    Python
                </div>
                <div className={`Conteudo ${mostraConteudoPython  ? "HiddenConteudo" : ""}`} >
                    {!mostraConteudoPython ? <Conteudo done = '30'/> : ""  } aqui terá conteúdo também
                </div>
                <div className="Habilidades" 
                    onClick={mostrnadoHabilidadeHtml}>
                    HTML
                </div>
                <div className={`Conteudo ${mostraConteudoHtml ? "HiddenConteudo" : ""}`}>
                    {!mostraConteudoHtml ? <Conteudo  done = '70'/> : ""  } aqui terá conteúdo também
                </div>
                <div className="Habilidades"
                    onClick={mostrandoHabilidadeCss}>
                    CSS
                </div>
                <div className={`Conteudo ${mostraConteudoCss ? "HiddenConteudo" : ""}`}>
                    {!mostraConteudoCss ? <Conteudo  done = '60'/> : ""  }aqui terá conteúdo também
                </div>
                <div className="Habilidades"
                    onClick={mostrandoHabilidadeJavascript}>
                    JAVASCRIPT
                </div>
                <div className={`Conteudo ${mostraConteudoJavascript ? "HiddenConteudo" : ""}`}>
                    {!mostraConteudoJavascript ? <Conteudo  done = '60'/> : ""  }aqui terá conteúdo também
                </div>
                <div className="Habilidades"
                    onClick={mostrandoHabilidadeReact}>
                    REACT
                </div>
                <div className={`Conteudo ${mostraConteudoReact ? "HiddenConteudo" : ""}`}>
                    {!mostraConteudoReact ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                </div>
                <div className="Habilidades"
                    onClick={mostrandoHabilidadeGit}>
                    GIT E GITHUB
                </div>
                <div className={`Conteudo ${mostraConteudoGit ? "HiddenConteudo" : ""}`}>
                    {!mostraConteudoGit ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                </div>
        </div>
    )
}
export default Habilidade