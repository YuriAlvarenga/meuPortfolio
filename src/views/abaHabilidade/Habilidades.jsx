import React, { useState } from "react"

import './habilidades.css'

import ComponenteHabilidade from "../../Components/ConteudosDeHabilidades/ComponenteHabilidades"
import HTML from '../../Imagens/logos/html.png'
import CSS from '../../Imagens/logos/css.png'
import JS from '../../Imagens/logos/js.png'
import PYTHON from '../../Imagens/logos/python.png'
import MONGO from '../../Imagens/logos/mongo.png'
import MYSQL from '../../Imagens/logos/mysql.png'
import POSTGRE from '../../Imagens/logos/postgre.png'
import GITHUB from '../../Imagens/logos/github.png'
import REACT from '../../Imagens/logos/react.png'
import NODE from '../../Imagens/logos/node.png'

import Card from '../../Components/ConteudosDeHabilidades/ConteudoDeHabilidades'


const Habilidade = () => {
    const[conteudoHabilidades, setMostraConteudoHabilidades] = useState(true)
    const mostrandoHabilidade = ()=>{
        setMostraConteudoHabilidades(!conteudoHabilidades)
        console.log("mostrou gafanhoto")
}
    return(
        <div className="QuadroHabilidades">
            <h2 >QUADRO DE HABILIDADES</h2>
            <div className="ComponenteDestaques">
                <div onClick={mostrandoHabilidade}> 
                    <ComponenteHabilidade  imagem= {HTML}/>
                </div>
                {conteudoHabilidades ? "" : <Card/>}
                <div onClick={mostrandoHabilidade}>
                    <ComponenteHabilidade  imagem= {CSS}/>
                </div>
                <ComponenteHabilidade imagem= {JS}/>
                <ComponenteHabilidade  imagem= {PYTHON}/>
            </div>
            <div className="ComponenteDestaques">
                <ComponenteHabilidade imagem= {MONGO}/>
                <ComponenteHabilidade imagem= {MYSQL}/>
                <ComponenteHabilidade imagem= {POSTGRE}/>
            </div>
            <div className="ComponenteDestaques">
                <ComponenteHabilidade imagem= {GITHUB}/>
                <ComponenteHabilidade imagem= {REACT}/>
                <ComponenteHabilidade imagem= {NODE}/>
            </div>
        </div>
    )
}
export default Habilidade