import React, { useState } from "react"

import './habilidades.css'

import { IoIosCloseCircleOutline } from "react-icons/io"

import ComponenteHabilidade from "../../Components/ConteudoDeHabilidades/ComponenteHabilidade"
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

import { Card, CardContent, Typography } from "@mui/material"


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
                <div className={`"HiddenDiv" ${conteudoHabilidades ? "HiddenDiv" : "ConteudoAberto"}`}>
                    <div className="BotaoFecharCard"><IoIosCloseCircleOutline size={25} color="#eee" onClick={mostrandoHabilidade}/></div>
                    <div className='conteudoHabilidade'>
                        <Card sx={{ width: 300, height:400, backgroundColor: "#000", margin: 5}}>
                            <CardContent ><Typography variant="body2" color="#eee">Conteudo Aqui</Typography> </CardContent>
                        </Card>
                    </div>
                </div>
                <div onClick={mostrandoHabilidade}>
                    <ComponenteHabilidade  imagem= {CSS}/>
                </div>
                <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {JS}/></div>
                <div onClick={mostrandoHabilidade}><ComponenteHabilidade  imagem= {PYTHON}/></div>
            </div>
            <div className="ComponenteDestaques">
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {MONGO}/></div>
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {MYSQL}/></div>
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {POSTGRE}/></div>
            </div>
            <div className="ComponenteDestaques">
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {GITHUB}/></div>
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {REACT}/></div>
            <div onClick={mostrandoHabilidade} ><ComponenteHabilidade imagem= {NODE}/></div>
            </div>
        </div>
    )
}
export default Habilidade