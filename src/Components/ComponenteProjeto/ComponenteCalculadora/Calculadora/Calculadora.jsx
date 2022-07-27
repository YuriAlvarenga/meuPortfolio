import React from "react"
import { useState } from "react"
import './calculadora.css'

export default function Calculadora(){
          
    const [num, setNum] = useState(0)
    const [valorAntigo, setValorAntigo]= useState(0)
    const [operador, setOperador] = useState()


    const inputNum = (e)=>{
        let novoValor = e.target.value
        if(num === 0){
            setNum(novoValor)
        }else{
            setNum( num + novoValor)
        }
    }
    const limparTela=(e)=>{
        setNum(0)
    }
    const porcentagem=()=>{
        setNum(parseFloat(valorAntigo) * parseFloat((num/100)))
    }
    const alternadorDeSinal=()=>{
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }
    const operadores =(e)=>{
        let ValorDoOperador = e.target.value
        setOperador(ValorDoOperador)
        setValorAntigo(num)
        setNum(0)
    }
    const calcular =()=>{
        if(operador==="/"){
            setNum(parseFloat(valorAntigo)/parseFloat(num))
        }
        if(operador==="x"){
            setNum(parseFloat(valorAntigo)*parseFloat(num))
        }
        if(operador==="-"){
            setNum(parseFloat(valorAntigo)-parseFloat(num))
        }
        if(operador==="+"){
            setNum(parseFloat(valorAntigo) + parseFloat(num))
        }

    }
    return(
        <div className="ContainerDivPrincipal"> 
            <div className="ContainerCalculadora"> 
                <div className="Tela">
                    <span className="NumerosDaTela">
                        {num}
                    </span>
                </div>
                <div>
                    <button className="BotaoBranco" onClick={limparTela}>AC</button>
                    <button className="BotaoBranco" onClick={alternadorDeSinal}>+/-</button>
                    <button className="BotaoBranco" onClick={porcentagem}>%</button>
                    <button className="BotaoOrange" onClick={operadores} value={"/"}>/</button>
                    <button className="BotaoCinza" onClick={inputNum} value={7}>7</button>
                    <button className="BotaoCinza" onClick={inputNum} value={8}>8</button>
                    <button className="BotaoCinza" onClick={inputNum} value={9}>9</button>
                    <button className="BotaoOrange" onClick={operadores} value={"x"}>x</button>
                    <button className="BotaoCinza" onClick={inputNum} value={4}>4</button>
                    <button className="BotaoCinza" onClick={inputNum} value={5}>5</button>
                    <button className="BotaoCinza" onClick={inputNum} value={6}>6</button>
                    <button className="BotaoOrange" onClick={operadores} value={"-"}>-</button>
                    <button className="BotaoCinza" onClick={inputNum} value={1}>1</button>
                    <button className="BotaoCinza" onClick={inputNum} value={2}>2</button>
                    <button className="BotaoCinza" onClick={inputNum} value={3}>3</button>
                    <button className="BotaoOrange" onClick={operadores} value={"+"}>+</button>
                    <button className="BotaoCinza" onClick={inputNum} value={0}>0</button>
                    <button className="BotaoCinza" onClick={inputNum} value={"00"}>00</button>
                    <button className="BotaoCinza" onClick={inputNum} value={"."}>.</button>
                    <button className="BotaoOrange"  onClick={calcular}>=</button>
                </div>
            </div>
        
        </div>
    )
}