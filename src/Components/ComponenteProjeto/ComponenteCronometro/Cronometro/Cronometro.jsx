import React, { useState } from "react"
import { useEffect } from "react"


import './cronometro.css'

export default function Cronometro(){
    
    const [tempo, setTempo] = useState(0)
    const [tempoRodando, setTempoRodando] = useState(false)
  
    useEffect(()=>{
        let interval
        if(tempoRodando){
            interval = setInterval(()=>{
                setTempo((prevTime)=> prevTime + 10)
            }, 10)
        }else if(!tempoRodando){
            clearInterval(interval)
        }
        return() => clearInterval(interval)
    }, [tempoRodando])

    return(
        <div className="BackgroundCronometro">
            <div className="ContainerCronometro">
                <span className="ComponenteCronometro">{("0" + Math.floor((tempo / 60000) % 60)).slice(-2)}</span>:
                <span className="ComponenteCronometro">{("0" + Math.floor((tempo / 1000) % 60)).slice(-2)}</span>:
                <span className="ComponenteCronometro">{("0" + ((tempo / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="ContainerBotoesCronometro">
                <button className="BotaoStart" onClick={() => setTempoRodando(true)}>START</button>
                <button className="BotaoRestart" onClick={() => setTempo(0)}>RESTART</button>
                <button className="BotaoStop" onClick={() => setTempoRodando(false)}>STOP</button>
            </div>
        </div>
    )
}