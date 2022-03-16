import React from "react"
import './rodape.css'
import { AiFillGithub } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"

const Rodape = (props) =>(
    <div className="Rodape">
        <div className="RedesSociais">
            <AiFillGithub size={20} />
            <AiFillLinkedin size={20}/>
            <AiFillInstagram size={20} />

        </div>
    </div>
)
export default Rodape