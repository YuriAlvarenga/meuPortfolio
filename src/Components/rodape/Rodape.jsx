import React from "react"
import './rodape.css'
import { Link } from 'react-router-dom'

import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"


export default function Rodape () {
    return(
        <div className="Rodape">
                <div className="RedesSociais">
                    <Link to="https://github.com/YuriAlvarenga"><AiFillGithub className="imagemGit" size={20} color= "#eee"/></Link>
                    <Link to="https://br.linkedin.com/in/yuri-alvarenga-258332185"><AiFillLinkedin className="imagemLinkedin" size={20} color="#eee"/></Link>
                    <Link to="https://www.instagram.com/yuri_alvareng/"><AiFillInstagram className="imagemInsta" size={20}/></Link>
                </div>
        </div>
    )
}