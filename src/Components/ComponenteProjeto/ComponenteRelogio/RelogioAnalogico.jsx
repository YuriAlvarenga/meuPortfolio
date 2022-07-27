import React from 'react'
import { useEffect } from 'react'

import './relogioAnalogico.css'

export default function Relogio() {
  useEffect(()=>{
    //pegando os ponteiros com o Dom
    const hour = document.querySelector("#horas")
    const minute = document.querySelector("#minutos")
    const second = document.querySelector("#segundos")

    setInterval(() => {
      const date = new Date()
      //pega a hora e multiplica pela rotação em deg resultando na posição do ponteiro
      hour.style.transform = `rotate(${(date.getHours()) * 30}deg) translate(55%)`
      minute.style.transform = `rotate(${(date.getMinutes()) * 6}deg) translate(55%)`
      second.style.transform = `rotate(${(date.getSeconds()) * 6}deg) translate(55%)`
    }, 1000)

  },[])

return (
    <div className='Relogio'>
        <span id='horas'></span>  
        <span id='minutos'></span>  
        <span  id='segundos' ></span>
        <span id='botaoDoMeio'></span>
        <span className='Hora Hora1'>.</span>  
        <span className='Hora Hora2'>.</span>  
        <span className='Hora Hora3'>.</span>  
        <span className='Hora Hora4'>.</span>  
        <span className='Hora Hora5'>.</span>  
        <span className='Hora Hora6'>.</span>                 
        <span className='Hora Hora7'>.</span>  
        <span className='Hora Hora8'>.</span>  
        <span className='Hora Hora9'>.</span>  
        <span className='Hora Hora10'>.</span>  
        <span className='Hora Hora11'>.</span> 
        <span className='Hora Hora12'>.</span>   
    </div>
  );
}