import React, { useState } from "react"

import './habilidades.css'
import Conteudo from "../../Components/ConteudosDeHabilidades/ConteudoAbaHabilidade"
import { GoPlus } from 'react-icons/go'
import { FaMinus} from  'react-icons/fa'


const Habilidade = () => {

    const [mostraConteudoPython, setEscondeConteudo]  = useState(true)
    const mostrandoHabilidadePython =()=>{
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
    //IDIOMAS
    const [mostraConteudoIngles, setEscondeConteudoIngles] = useState(true)
    const mostrandoHabilidadeIngles = ()=>{
        setEscondeConteudoIngles(!mostraConteudoIngles)
    }
    const [mostraConteudoEspanhol, setEscondeConteudoEspanhol] = useState(true)
    const mostrandoHabilidadeEspanhol = ()=>{
        setEscondeConteudoEspanhol(!mostraConteudoEspanhol)
    }
    
    return(
        <div className="PaginaHabilidade">
            <div className="SuporteCaixaHabilidades">
                <div className="TituloDeHabilidade">LINGUAGEM DE PROGRAMAÇÃO
                <span className="MargemTituloHabilidade"></span>
                    <div onClick={mostrandoHabilidadePython}
                         className={`Habilidades ${mostraConteudoPython ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        PYTHON
                        {mostraConteudoPython ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoPython  ? "HiddenConteudo" : ""}`} >
                        {!mostraConteudoPython ? <Conteudo done = '30'/> : ""  } aqui terá conteúdo também
                    </div>
                    <div onClick={mostrnadoHabilidadeHtml} 
                        className={`Habilidades ${mostraConteudoHtml ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        HTML
                        {mostraConteudoHtml ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoHtml ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoHtml ? <Conteudo  done = '70'/> : ""  } aqui terá conteúdo também
                    </div>
                    <div onClick={mostrandoHabilidadeCss} 
                        className={`Habilidades ${mostraConteudoCss ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        CSS
                        {mostraConteudoCss ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoCss ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoCss ? <Conteudo  done = '60'/> : ""  }aqui terá conteúdo também
                    </div>
                    <div onClick={mostrandoHabilidadeJavascript}
                        className={`Habilidades ${mostraConteudoJavascript ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        JAVASCRIPT
                        {mostraConteudoJavascript ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoJavascript ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoJavascript ? <Conteudo  done = '60'/> : ""  }aqui terá conteúdo também
                    </div>
                    <div onClick={mostrandoHabilidadeReact} 
                        className={`Habilidades ${mostraConteudoReact ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        REACT
                        {mostraConteudoReact ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoReact ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoReact ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                    </div>
                    <div onClick={mostrandoHabilidadeGit} 
                        className={`Habilidades ${mostraConteudoGit ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        GIT E GITHUB
                        {mostraConteudoGit ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoGit ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoGit ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                    </div>
                </div>
                <div className="TituloDeHabilidade">IDIOMAS
                    <div onClick={mostrandoHabilidadeIngles} 
                        className={`Habilidades ${mostraConteudoIngles ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        INGLÊS
                        {mostraConteudoIngles ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoIngles ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoIngles ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                    </div>
                    <div onClick={mostrandoHabilidadeEspanhol} 
                        className={`Habilidades ${mostraConteudoEspanhol ? "Habilidades" : "HabilidadesAbertas"}`}>
                        <span/>
                        ESPANHOL
                        {mostraConteudoEspanhol ? <GoPlus/> : <FaMinus/>}
                    </div>
                    <div className={`Conteudo ${mostraConteudoEspanhol ? "HiddenConteudo" : ""}`}>
                        {!mostraConteudoEspanhol ? <Conteudo  done = '30'/> : ""  }aqui terá conteúdo também
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Habilidade