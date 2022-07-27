import React from "react"
import { useState } from "react"
import './contadorCronometro.css'


export default function ContadorCronometro(){

    const [contadorMinutos, setContadorMinutos] = useState(0)
    const [contadorSegundos, setContadorSegundos] = useState(0)
    
    let intervalMinutos = setTimeout(()=> setContadorMinutos(contadorMinutos + 1), 1000)
    if (contadorMinutos === 10){
        setContadorMinutos(0)
        clearTimeout(intervalMinutos)
    }
    let intervalSegundos = setTimeout(()=> setContadorSegundos(contadorSegundos + 1), 1)
    if(contadorSegundos === 100){
        setContadorSegundos(0)
        clearTimeout(intervalSegundos)
    }
    
      
    return(
        <div className="Contador">
            <span className="ContadorCronometro">00</span>:
            <span className="ContadorCronometro">{`0${contadorMinutos}`}</span>:
            <span className="ContadorCronometro">{contadorSegundos}</span>
        </div>
    )
}