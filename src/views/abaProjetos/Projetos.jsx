import React from "react"
import "./projetos.css"

import CardProjeto from '../../Components/ComponenteProjeto/ConteudoCardProjeto'



import ToDoList from "../../Components/ComponenteProjeto/ComponenteToDoList/ToDoList/ToDoList"
import CapaToDoList from "../../Components/ComponenteProjeto/ComponenteToDoList/CapaToDoList"
import Calculadora from '../../Components/ComponenteProjeto/ComponenteCalculadora/Calculadora/Calculadora'
import CalculadoraHelloWorld from "../../Components/ComponenteProjeto/ComponenteCalculadora/CalculadoraHelloWorld"
import Relogio from "../../Components/ComponenteProjeto/ComponenteRelogio/RelogioAnalogico"
import RelogioDigital from "../../Components/ComponenteProjeto/ComponenteRelogio/ComponenteRelogioDigital/RelogioDigital"
import Cronometro from "../../Components/ComponenteProjeto/ComponenteCronometro/Cronometro/Cronometro"
import ContadorCronometro from "../../Components/ComponenteProjeto/ComponenteCronometro/ContadorCronometro"


export default function Projetos(){

    return(
        <div className="Projetos">
            <div className="CardsProjetos"> 
                <CardProjeto titulo="TO-DO LIST" 
                    componenteCapa = {<CapaToDoList/>}
                    componente={<ToDoList/>}
                    descricao="Este é um projeto de um To-Do List que utiliza
                        as tecnologias JS, CSS e React." 
                />
                <CardProjeto titulo="CALCULADORA"
                    componenteCapa={<CalculadoraHelloWorld/>} 
                    componente={<Calculadora/>}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."
                />
                    <CardProjeto titulo="RELÓGIO" 
                        componenteCapa={<Relogio/>}
                        componente={<RelogioDigital/>}
                        descricao="Este é um projeto de um relógio analógico, relǵogio digital e
                        a previsão do tempo também."
                    />
            </div>
            <div className="CardsProjetos">
                <CardProjeto titulo="MEGA SENA" 
                    
                    descricao="Este é um jogo que disponibiliza números
                        aleatórios a serem jogados na Mega Sena"
                />
                <CardProjeto titulo="CRONÔMETRO"
                    componenteCapa={<ContadorCronometro/>}
                    componente={<Cronometro/>}
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."    
                />
                <CardProjeto titulo="YOUTUBE"
                    
                    descricao="Este é um projeto de uma calculadora simples que utiliza
                        as tecnologias JS, CSS e React."
                />
            </div>
        </div>
    )
}