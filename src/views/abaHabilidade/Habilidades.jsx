import React, { useState } from "react"

import './habilidades.css'

import { IoIosCloseCircleOutline } from "react-icons/io"

import ComponenteHabilidade from "../../Components/ComponenteDeHabilidades/ComponenteHabilidade"
import ConteudoDeHabilidade from "../../Components/ConteudosDeHabilidades/ConteudoDeHabilidades"
import HTML from '../../Imagens/logos/html.png'
import CSS from '../../Imagens/logos/css.png'
import JS from '../../Imagens/logos/js.png'
import PYTHON from '../../Imagens/logos/python.png'
import MONGO from '../../Imagens/logos/mongo.png'
import MYSQL from '../../Imagens/logos/mysql.png'
import GITHUB from '../../Imagens/logos/github.png'
import REACT from '../../Imagens/logos/react.png'
import NODE from '../../Imagens/logos/node.png'

//import { Card, CardContent, Typography } from "@mui/material"


const Habilidade = () => {
    const[conteudoHabilidadeHTML, setMostraConteudoHabilidadeHMTL] = useState(true)
    const mostrandoHabilidadeHMTL = ()=>{
        setMostraConteudoHabilidadeHMTL(!conteudoHabilidadeHTML)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeCSS, setMostraConteudoHabilidadeCSS] = useState(true)
    const mostrandoHabilidadeCSS = ()=>{
        setMostraConteudoHabilidadeCSS(!conteudoHabilidadeCSS)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeJS, setMostraConteudoHabilidadeJS] = useState(true)
    const mostrandoHabilidadeJS = ()=>{
        setMostraConteudoHabilidadeJS(!conteudoHabilidadeJS)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadePython, setMostraConteudoHabilidadePython] = useState(true)
    const mostrandoHabilidadePython = ()=>{
        setMostraConteudoHabilidadePython(!conteudoHabilidadePython)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeMDB, setMostraConteudoHabilidadeMDB] = useState(true)
    const mostrandoHabilidadeMDB = ()=>{
        setMostraConteudoHabilidadeMDB(!conteudoHabilidadeMDB)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeSQL, setMostraConteudoHabilidadeSQL] = useState(true)
    const mostrandoHabilidadeSQL = ()=>{
        setMostraConteudoHabilidadeSQL(!conteudoHabilidadeSQL)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeGit, setMostraConteudoHabilidadeGit] = useState(true)
    const mostrandoHabilidadeGit = ()=>{
        setMostraConteudoHabilidadeGit(!conteudoHabilidadeGit)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeReact, setMostraConteudoHabilidadeReact] = useState(true)
    const mostrandoHabilidadeReact = ()=>{
        setMostraConteudoHabilidadeReact(!conteudoHabilidadeReact)
        console.log("mostrou gafanhoto")
    }
    const[conteudoHabilidadeNode, setMostraConteudoHabilidadeNode] = useState(true)
    const mostrandoHabilidadeNode = ()=>{
        setMostraConteudoHabilidadeNode(!conteudoHabilidadeNode)
        console.log("mostrou gafanhoto")
    }

    return(
        <div className="QuadroHabilidades">
            <h2 >QUADRO DE HABILIDADES</h2>
            <div className="ComponenteDestaques">
                <div onClick={mostrandoHabilidadeHMTL}> <ComponenteHabilidade  imagem= {HTML}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeHTML ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeHMTL}/></div>
                    <div >
                        <ConteudoDeHabilidade 
                         titulo="HMTL" 
                         body1="Anatomia de um documento HTML"
                         body2="Utilização de imagens"
                         body3="Cabeçalhos"
                         body4="Parágrafo"
                         body5="Listas"
                         body6="Links"
                         body7="Aninhamento de elementos"
                         body8="8 - "
                         />
                         
                    </div>
                </div>

                <div onClick={mostrandoHabilidadeCSS}><ComponenteHabilidade  imagem= {CSS}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeCSS ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeCSS}/></div>
                    <div >
                        <ConteudoDeHabilidade
                            titulo="CSS" 
                            body1="Anatomia de um conjunto de regras CSS"
                            body2="Selecionando múltiplos elementos"
                            body3="Diferentes tipos de seletores"
                            body5="Caixas (paddin, border, margin..)"
                            body6="Posicionamento e estilização"
                            body7="Variáveis CSS"
                            body8=""
                            body9=""
                          />
                    </div>
                </div>


                <div onClick={mostrandoHabilidadeJS} ><ComponenteHabilidade imagem= {JS}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeJS ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeJS}/></div>
                    <div >
                        <ConteudoDeHabilidade
                         titulo="JAVASCRIPT" 
                         body1="Controle de fluxo e manipulação de erro"
                         body2="Laços e iteração"
                         body3="Funções"
                         body4="Expressões e operadores"
                         body5="Expressões Regular"
                         body6="Coleções Indexadas"
                         body7="Trabalhando com objetos"
                         body8=""
                         />
                    </div>
                </div>

            </div>
            <div className="ComponenteDestaques">
                <div onClick={mostrandoHabilidadePython}><ComponenteHabilidade  imagem= {PYTHON}/></div>
                    <div className={`"HiddenDiv" ${conteudoHabilidadePython ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadePython}/></div>
                        <div >
                            <ConteudoDeHabilidade
                            titulo="PYTHON" 
                            body1="Anatomia de um documento HTML"
                            body2="Utilização de imagens"
                            body3="Cabeçalhos"
                            body4="Parágrafo"
                            body5="Listas"
                            body6="Links"
                            body7="Aninhamento de elementos"
                            body8=""
                            />
                        </div>
                    </div>

                <div onClick={mostrandoHabilidadeMDB} ><ComponenteHabilidade imagem= {MONGO}/></div>
                    <div className={`"HiddenDiv" ${conteudoHabilidadeMDB ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeMDB}/></div>
                        <div >
                            <ConteudoDeHabilidade
                            titulo="MONGODB" 
                            body1="1 - Anatomia de um documento HTML"
                            body2="2 - Utilização de imagens"
                            body3="3 - Cabeçalhos"
                            body4="4 - Parágrafo"
                            body5="5 - Listas"
                            body6="6 - Links"
                            body7="7 - Aninhamento de elementos"
                            body8="8 - "
                            />
                        </div>
                    </div>

            <div onClick={mostrandoHabilidadeSQL} ><ComponenteHabilidade imagem= {MYSQL}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeSQL ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeSQL}/></div>
                        <div >
                            <ConteudoDeHabilidade
                            titulo="MYSQL" 
                            body1="1 - Anatomia de um documento HTML"
                            body2="2 - Utilização de imagens"
                            body3="3 - Cabeçalhos"
                            body4="4 - Parágrafo"
                            body5="5 - Listas"
                            body6="6 - Links"
                            body7="7 - Aninhamento de elementos"
                            body8="8 - "
                            />
                        </div>
                    </div>
            </div>
            <div className="ComponenteDestaques">
            <div onClick={mostrandoHabilidadeGit} ><ComponenteHabilidade imagem= {GITHUB}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeGit ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeGit}/></div>
                        <div >
                            <ConteudoDeHabilidade
                            titulo="GIT E GITHUB" 
                            body1="1 - Anatomia de um documento HTML"
                            body2="2 - Utilização de imagens"
                            body3="3 - Cabeçalhos"
                            body4="4 - Parágrafo"
                            body5="5 - Listas"
                            body6="6 - Links"
                            body7="7 - Aninhamento de elementos"
                            body8="8 - "
                            />
                        </div>
                    </div>

            <div onClick={mostrandoHabilidadeReact} ><ComponenteHabilidade imagem= {REACT}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeReact ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#000" onClick={mostrandoHabilidadeReact}/></div>
                        <div >
                            <ConteudoDeHabilidade
                            titulo="REACT" 
                            body1="1 - Anatomia de um documento HTML"
                            body2="2 - Utilização de imagens"
                            body3="3 - Cabeçalhos"
                            body4="4 - Parágrafo"
                            body5="5 - Listas"
                            body6="6 - Links"
                            body7="7 - Aninhamento de elementos"
                            body8="8 - "
                            />
                        </div>
                    </div>

            <div onClick={mostrandoHabilidadeNode} ><ComponenteHabilidade imagem= {NODE}/></div>
                <div className={`"HiddenDiv" ${conteudoHabilidadeNode ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidadeNode}/></div>
                        <div >
                            <ConteudoDeHabilidade color="#000"
                            titulo="NODE" 
                            body1="1 - Anatomia de um documento HTML"
                            body2="2 - Utilização de imagens"
                            body3="3 - Cabeçalhos"
                            body4="4 - Parágrafo"
                            body5="5 - Listas"
                            body6="6 - Links"
                            body7="7 - Aninhamento de elementos"
                            body8="8 - "
                            />
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Habilidade