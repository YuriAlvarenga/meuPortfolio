import React from 'react'
import { useState } from 'react'

import './destaques.css'


export default function MediaCard() {
  const [frontCard, setCard] = useState(true)
  const mudaCard=()=>{
    if (frontCard === true){
      setCard(!frontCard)

    }
    else{
      setCard(!frontCard)
      console.log("girou o card")
    }
  }
  return (
    <div className='FlipCard' onClick={mudaCard}>
      <div className="Card " >
        <div className={`"Card" ${frontCard ? "Card" : "BackCard"}`}>
          <div className='BackgroundFrontCard'>
            <h1>Sobre Mim</h1>
            <p>Desenvolvedor Front-End & Back-Endr</p>
            <p>Iniciante</p>
          </div>
        </div>
        <div className={`"Card" ${frontCard ? "BackCard" : "Card"}`}>
          <div className='BackgroundBackCard'>
            <h1>Yuri </h1>
            <p>mudei o card</p>
            <p>Iniciante</p>
          </div>
        </div>
      </div>
    </div>

   

  );
}