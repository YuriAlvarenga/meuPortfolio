import React from "react"
import './curriculo.css'
import Imagem from '../Imagens/euCamisaBranca.jpeg'

const Curriculo = props =>(
    <div className="InicioCurriculo"> 
        <div className="ConteudoDeInicio">
            <div className="TituloDeInicio">
                <div className="Nome">Yuri Amorim Alvarenga de Sousa
                    <div className="Endereco">Itapema, Santa Catarina - Brazil</div>
                </div>
                <img className="FotoPerfilInicio" src={Imagem} alt="Foto de Perfil" />
            </div>
            <div className="TituloTopicos">
                Formação
                <div className="ConteudoFormacao">
                    <p>Sistema de Informação: Instituto Federal Catarinense IFC</p>
                    <p>Camboriú- Santa Catarina (Cursando)</p>
                    
                </div>
            </div>
            <div className="TituloTopicos">
                Cursos Complementares
                <div className="ConteudoFormacao">
                    <p>Inglês: Intermediário</p>
                    <p>Espanhol: Básico</p>
                </div>
            </div>
            <div className="TituloTopicos">
                Redes Sociais
            <div className="ConteudoRedesSociais">
                <a href="https://br.linkedin.com/in/yuri-alvarenga-258332185"><button className="BtnLinkedin">Linked <text>in</text></button></a>
                <a href="https://github.com/YuriAlvarenga"><button className="BtnGitHub">GitHub</button></a>
                <a href="https://www.instagram.com/yuri_alvareng/"><button className="BtnInstagram">Instagram</button></a>
            </div>
            </div>
            <div className="TituloTopicos">
                Download Currículo
                <div className="ConteudoFormacao">
                    <p>Quer saber mais?</p>
                    <p>Faça o Download do meu currículo completo clicando no botão abaixo</p>
            </div>
            </div>
            <div>
                <button className="BtnDownload">Currículo</button>
            </div>
        </div>
    </div>
)
export default Curriculo