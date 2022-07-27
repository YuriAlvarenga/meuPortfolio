import React from "react";
import { useState, useEffect } from "react";

import './relogioDigital.css'

export default function RelogioDigital() {
    const [valueHora, setValueHora] = useState(new Date())
   
    useEffect(()=>{
        const interval = setInterval(()=> setValueHora(new Date()), 1000)
        return()=>{
            clearInterval(interval)
        }
    },[])

    let hora = valueHora.getHours()
    let minutos = valueHora.getMinutes()
    let segundos = valueHora.getSeconds()

    if(hora < 10) hora = '0' + hora
    if(minutos < 10) minutos = '0' + minutos
    if(segundos < 10) segundos = '0' + segundos
    
    return(
        <div className="ContainerRelogioDigital">
            <span className="RelogioDigital">{hora}</span>:
            <span className="RelogioDigital">{minutos}</span>:
            <span className="RelogioDigital">{segundos}</span>
        </div>
    )
}