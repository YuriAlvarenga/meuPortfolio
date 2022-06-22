import React from "react"

import FomularioEnviar from "../../Components/ComponenteFormularioContato/ComponenteFormulario"
import './contato.css'


export default function Contato(){

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
                    <div className="AbaEnviarEmail">Enviar E-mail</div>
                    <div className="AbaWhatsapp">Whatsapp</div>
                </div>
                <FomularioEnviar/>

            </div>
            
        </div>
    )
}