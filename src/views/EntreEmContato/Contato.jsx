import React, { useState } from "react"

import './contato.css'

import FomularioEnviarEmail from "../../Components/ComponenteFormularioContato/FormularioEmailContato/formularioEmail"
import Whatsapp from "../../Components/ComponenteFormularioContato/ComponenteWhatsapp/WhatsappContato"

export default function Contato(){
    const[alternaAba, setAlternaAba] = useState("AbaEnviarEmail")
    const alternaAba1 = () =>{
        setAlternaAba("AbaEnviarEmail")
    }
    const alternaAba2 = () =>{
        setAlternaAba("AbaWhatsapp")
    }
    return(
        <div className="AbaContato">
            <div className="ContainerTexto">
                <div className="TextoEntreEmContato">
                    <h1>Gostou do meu portfólio?</h1>
                    <p>Entre em contato comigo agora mesmo para marcar uma entrevista!</p>
                    <p>Se preferir você pode me enviar um e-mail  ou conhecer um pouco mais sobre mim vendo as minhas redes sociais.</p>
                </div>
                <div className="ContainerAssinatura">
                    <p>Atenciosamente,</p>
                    <p>Yuri A A De Sousa</p>
                </div>
            </div>
            <div className="ContainerContato">
                <div className="BotoesDasAbas">
                    <div className={alternaAba === "AbaEnviarEmail" ? "active" : ""}
                        onClick={alternaAba1}>
                        Enviar E-mail
                    </div>
                    <div className={alternaAba === "AbaWhatsapp" ? "active" : ""}
                        onClick={alternaAba2}>
                        Whatsapp
                    </div>
                </div>
                {alternaAba === "AbaEnviarEmail" ? <FomularioEnviarEmail/> : <Whatsapp/>}

            </div>
            
        </div>
    )
}