import React from 'react'
import './mostraConteudo.css'

export default function CardHabilidade(props) {
    return (
      <div className='conteudoHabilidade'>
          <div className='CardHabilidade'>
            <div className='TituloCard'><h3>{props.titulo}</h3></div>
            <ul>
              <li>{props.body1}</li>
              <li>{props.body2}</li>
              <li>{props.body3}</li>
              <li>{props.body4}</li>
              <li>{props.body5}</li>
              <li>{props.body6}</li>
              <li>{props.body7}</li>
              <li>{props.body8}</li>
              <li>{props.body9}</li>
            </ul>
          </div>
      </div>
  
    );
  }