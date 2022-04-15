import React, { useState } from 'react'
import './conteudo.css'

export default function Conteudo({done}){
    
    let [valorProgresso, setValorProgresso] = useState({})
        setTimeout(()=>{
            const novoEstilo = {
                opacity: 1,
                width: `${done}%`
            }
            setValorProgresso(novoEstilo)
        },1000)
    
    
 
    return(
        <div>
            <div className='BarraProgresso'>
                <div className='Progresso' style={valorProgresso}></div>
            </div>
        </div>
    )
}