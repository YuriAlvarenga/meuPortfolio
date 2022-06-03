import React from "react"
import './inicio.css'

import { MdOutlineEmail } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { IoLogoInstagram } from "react-icons/io"

import Habilidade from "../abaHabilidade/Habilidades"
import Comentario from "../../Components/ComponenteComentario/ComponenteComentario"
import Destaques from "../abaDestaques/Destaques"

export default function Inicio(){

    return(
            <div>
                <div className="TituloPortfolio">
                    <h2>SEJA BEM-VINDO AO MEU PORTFÓLIO !</h2>
                    <div className="IconsContato">
                        <MdOutlineEmail/><AiFillGithub/><AiFillLinkedin/><IoLogoInstagram/>
                    </div>
                </div>
                <Habilidade/>
                <Destaques/>
                <Comentario/>
            </div>
    )
}