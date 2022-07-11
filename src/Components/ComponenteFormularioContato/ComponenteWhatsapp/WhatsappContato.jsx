import React from "react"
import "./whatsapp.css"

import ReactWhatsapp from 'react-whatsapp'
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { IoLogoInstagram } from "react-icons/io"

export default function Whatsapp(){
    window.rwbp={email:'alvarenga.yuri@hotmail.com',phone:'+5547997523753',message:'Olá, tudo bem? Que honra poder receber o seu contato',lang:'pt-BR'}
   
    return(
        <div className="AbaWhatsApp">
            <div className="TituloAbaWhatsapp">
                <h3>MINHAS REDES SOCIAIS</h3>
                <span className="RedesSociaisContato">
                    <AiFillGithub size={20} className="BotaoGitContato"/> 
                    <AiFillLinkedin size={20} className="BotaoLinkedinContato"/>
                    <IoLogoInstagram size={20} className="BotaoInstagramContato"/>
                </span>
            </div>
            <span className="TitutoBotaoWhatsapp"><h3>ENTRE EM CONTATO DIRETO NO MEU WHATSAPP</h3></span>
            <div>
                <ReactWhatsapp number="55-47-99752-3753" message="Hello World!"
                    className="BotaoWhatsapp">Whatsapp</ReactWhatsapp>
            </div>
        </div>
    )
}