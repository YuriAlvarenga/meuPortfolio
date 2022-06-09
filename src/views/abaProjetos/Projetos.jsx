import React from "react"
import "./projetos.css"

import CardProjeto from '../../Components/ComponenteProjeto/ConteudoCardProjeto'
import ToDoList from '../../Imagens/todolist.png'
import Calculadora from '../../Imagens/calculadora.png'
import Megassena from '../../Imagens/megasena.png'
import CaixaEletronico from '../../Imagens/caixaeletronico.jpg'
import Netflix from '../../Imagens/netflix.png'
import Youtube from '../../Imagens/youtube.png'

export default function Projetos(){

    return(
        <div className="Projetos">
            <div className="CardsProjetos">
                <CardProjeto titulo="TO-DO LIST" img ={ToDoList}/>
                <CardProjeto titulo="CALCULADORA" img={Calculadora}/>
                <CardProjeto titulo="MEGA SENA" img={Megassena}/>
            </div>
            <div className="CardsProjetos">
                <CardProjeto titulo="CAIXA ELETRÔNICO" img={CaixaEletronico}/>
                <CardProjeto titulo="NETFLIX" img={Netflix}/>
                <CardProjeto titulo="YOUTUBE" img={Youtube}/>
            </div>
        </div>
    )
}