import React from "react"
import './curriculo.css'
import Imagem from '../Imagens/fotoPerfil.jpeg'

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
                Formação:
                <div className="ConteudoFormacao">
                    <text>Sistema de Informação: Instituto Federal Catarinense</text>
                    <text>Camboriú- Santa Catarina (Cursando)</text>
                </div>
            </div>
            <div className="TituloTopicos">
                Cursos Complementares:
                <div className="ConteudoFormacao">
                    <text>Inglês:</text>
                    <text>Intermediário</text>
                    <text>Espanhol:</text>
                    <text>Básico</text>
                </div>
            </div>
            <div className="TituloTopicos">
                Redes Sociais:
            <div className="ConteudoRedesSociais">
                <a href="https://br.linkedin.com/in/yuri-alvarenga-258332185"><button className="BtnLinkedin">Linked <text>in</text></button></a>
                <a href="https://github.com/YuriAlvarenga"><button className="BtnGitHub">GitHub</button></a>
                <a href="https://www.instagram.com/yuri_alvareng/"><button className="BtnInstagram">Instagram</button></a>
            </div>
            </div>
            <div className="TituloTopicos">
                Download Currículo:
                <div className="ConteudoFormacao">
                    <text>Quer saber mais?</text>
                    <text>Faça o Download do meu currículo completo clicando no botão abaixo</text>
            </div>
            </div>
            <div>
                <button className="BtnDownload">Currículo</button>
            </div>
        </div>
    </div>
)
export default Curriculo