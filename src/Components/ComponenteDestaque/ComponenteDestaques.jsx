import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

import './destaques.css'

import { IoIosCloseCircleOutline } from "react-icons/io"
import { AiFillHeart} from "react-icons/ai"
import { AiFillLike } from "react-icons/ai"



function MediaCard(props) {
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
  const [contador, setContador] = useState(0)
  const botaoCoracao=()=>{
    if (coracaoNormal === true){
      setCoracao(!coracaoNormal)
      setContador( contador + 1)
    }
    else{
      setCoracao(!coracaoNormal)
      setContador(contador - 1)
    }
  }
  const [curtir, setCurtir] = useState(true)
  const [contadorCurtida, setContadorCurtida] = useState(0)
  const botaoCurtir=()=>{
    if (curtir === true){
      setCurtir(!curtir)
      setContadorCurtida(contadorCurtida + 1)
    }
    else{
      setCurtir(!curtir)
      setContadorCurtida(contadorCurtida - 1)
    }
  }

  return (
    <div className='FlipCard' >
      <div className="Card "  >
        <div onClick={mudaCard} className={`"Card" ${frontCard ? "Card" : "BackCard"}`}>
          <div className='BackgroundFrontCard'>
            <h1>{props.tituloFront}</h1>
          </div>
        </div>
        <div className={`"Card" ${frontCard ? "BackCard" : "Card"}`}>
          <div className='BackgroundBackCard'>
          <span className='SuporteBotaoFecharDestaque'><IoIosCloseCircleOutline onClick={mudaCard} className='BotaoFecharDestaque' size={22} /></span>
            <h2>{props.tituloBack}</h2>
            <p>{props.body}</p>
          <span className='MenuCardFavorito' >
            <AiFillHeart size={20} onClick={botaoCoracao} className={`"" ${coracaoNormal ? '': 'CoracaoCurtido'}`}/>
            total: {contador}
            <AiFillLike size={20} onClick={botaoCurtir} className={`"" ${curtir ? '': 'Curtido'}`} />
            total: {contadorCurtida}
          </span>
          </div>
        </div>
      </div>
    </div>

   

  );
}
export default memo(MediaCard)