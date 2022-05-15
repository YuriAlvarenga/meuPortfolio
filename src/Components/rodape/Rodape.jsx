import React from "react"
import './rodape.css'

import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { IoLogoInstagram } from "react-icons/io"

export default function Rodape () {
    return(
        <div className="Rodape">
                <div className="RedesSociais">
                    <a href="https://github.com/YuriAlvarenga"><AiFillGithub className="imagemGit" size={20} color= "#eee"/></a>
                    <a href="https://br.linkedin.com/in/yuri-alvarenga-258332185"><AiFillLinkedin className="imagemLinkedin" size={20} color="#eee"/></a>
                    <a href="https://www.instagram.com/yuri_alvareng/"><IoLogoInstagram  className="imagemInsta" color="#eee" size={20}/></a>
                </div>
        </div>
    )
}