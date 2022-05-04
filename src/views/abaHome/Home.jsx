import React from "react"
import './home.css'


import Imagem from '../../Imagens/fotoPerfil.jpeg'

const Home = props => (
    <div className="Home">
        <div className="Moldura">
            <img className="Imagem" src={Imagem} alt="imagem de perfil Yuri Alvarenga" ></img>
        </div>
        <div className="bemVindo">
            <h1>PORTFÓLIO</h1>
        </div>
    </div>
)

export default Home 