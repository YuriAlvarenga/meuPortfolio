import React from "react"
import './rodape.css'

import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"


export default function Rodape () {
    return(
        <div className="Rodape">
                <div className="RedesSociais">
                    <a href="https://github.com/YuriAlvarenga"><AiFillGithub size={20} color="#eee" /></a>
                    <a href="https://br.linkedin.com/in/yuri-alvarenga-258332185"><AiFillLinkedin size={20} color="#eee"/></a>
                    <a href="https://www.instagram.com/yuri_alvareng/"><AiFillInstagram size={20} color="#eee"/></a>
                </div>
        </div>
    )
}