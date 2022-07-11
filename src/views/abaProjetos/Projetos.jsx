import React from "react"
import "./projetos.css"

import CardProjeto from '../../Components/ComponenteProjeto/ConteudoCardProjeto'
import ToDoList from '../../Imagens/todolist.png'
import ImagemCalculadora from  '../../Imagens/calculadora.png'
import Megassena from '../../Imagens/megasena.png'
import CaixaEletronico from '../../Imagens/calculadora.png'
import Netflix from '../../Imagens/netflix.png'
import Youtube from '../../Imagens/youtube.png'


import Calculadora from '../../Components/ComponenteProjeto/ComponenteCalculadora/Calculadora'

export default function Projetos(){

    return(
        <div className="Projetos">
            <div className="CardsProjetos"> 
                <CardProjeto titulo="TO-DO LIST" 
                    img ={ToDoList}
                    descricao="Este é um projeto de um To-Do List que utiliza
                        as tecnologias JS, CSS e React." 
                />
                <CardProjeto titulo="CALCULADORA"
                    img={ImagemCalculadora} 
                    componente={<Calculadora/>}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."
                />
                <CardProjeto titulo="MEGA SENA" 
                    img={Megassena}
                    descricao="Este é um jogo que disponibiliza números
                        aleatórios a serem jogados na Mega Sena"
                />
            </div>
            <div className="CardsProjetos">
                <CardProjeto titulo="CAIXA ELETRÔNICO" 
                    img={CaixaEletronico}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."
                />
                <CardProjeto titulo="NETFLIX"
                    img={Netflix}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."    
                />
                <CardProjeto titulo="YOUTUBE"
                    img={Youtube}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."
                />
            </div>
        </div>
    )
}