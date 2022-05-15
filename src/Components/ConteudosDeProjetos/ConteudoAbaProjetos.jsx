import React from "react"
import './conteudoAbaProjetos.css'
import { useRef } from 'react'

import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIos } from "react-icons/md"



export default function ConteudoAbaProjeto(){
    const carrossel = useRef(null)
    const handleLeftClick=(e)=>{
        e.preventDefault()
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const handleRightClick=(e)=>{
        e.preventDefault()
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
    return(
        <div className="EixoDeslocamento">
            <button onClick={handleLeftClick} className="buttonSide"><MdArrowBackIos size={30}/></button> 
            <div className="carrossel" ref={carrossel}>
                <div className="CaixaComponente" >oi</div>
                <div className="CaixaComponente"> oi</div>
                <div className="CaixaComponente"> oi</div>
                <div className="CaixaComponente"> oi</div>
                <div className="CaixaComponente"> oi</div>
                <div className="CaixaComponente"> oi</div>
            </div>
            <button onClick={handleRightClick} className="buttonSide"><MdArrowForwardIos size={30}/></button> 
        </div>
    )
}