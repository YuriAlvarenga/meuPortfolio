import React from 'react'
import { useState } from 'react'

import './destaques.css'

import { IoIosCloseCircleOutline } from "react-icons/io"
import { AiFillHeart} from "react-icons/ai"
import { AiFillLike } from "react-icons/ai"


export default function MediaCard(props) {
  const [frontCard, setCard] = useState(true)
  const mudaCard=()=>{
    if (frontCard === true){
      setCard(!frontCard)
    }
    else{
      setCard(!frontCard)
    }
  }
  const [coracaoNormal, setCoracao] = useState(true)
  const botaoCoracao=()=>{
    setCoracao(!coracaoNormal)
  }
  const [curtir, setCurtir] = useState(true)
  const botaoCurtir=()=>{
    setCurtir(!curtir)
  }

  return (
    <div className='FlipCard' >
      <div className="Card "  >
        <div onClick={mudaCard} className={`"Card" ${frontCard ? "Card" : "BackCard"}`}>
          <div className='BackgroundFrontCard'>
            <h1>Sobre Mim</h1>
          </div>
        </div>
        <div className={`"Card" ${frontCard ? "BackCard" : "Card"}`}>
          <div className='BackgroundBackCard'>
          <span className='SuporteBotaoFecharDestaque'><IoIosCloseCircleOutline onClick={mudaCard} className='BotaoFecharDestaque' size={22} /></span>
            <h2>{props.titulo}</h2>
            <p>{props.body}</p>
          <span className='MenuCardFavorito' >
            <AiFillHeart size={20} onClick={botaoCoracao} className={`"" ${coracaoNormal ? '': 'CoracaoCurtido'}`}/>
            <AiFillLike size={20} onClick={botaoCurtir} className={`"" ${curtir ? '': 'Curtido'}`} />
            total: 0
          </span>
          </div>
        </div>
      </div>
    </div>

   

  );
}