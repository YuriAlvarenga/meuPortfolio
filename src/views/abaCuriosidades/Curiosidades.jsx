import React from "react"
import './destaques.css'

import MediaCard from "../../Components/ComponenteCuriosidade/ComponenteCuriosidades"

export default function Destaques(){
    return(
    <div className="QuadroDestaques">
        <div className="TituloDestaques"><h2>CURIOSIDADES</h2></div>
            <div className='CardsDestaques'>
                <MediaCard 
                    tituloFront ="Quem sou eu?"
                    tituloBack="Yuri Alvarenga"
                    body="Olá, eu tenho 27 anos e sou natural de 
                    São Luís, Maranhão. No entanto, hoje moro
                    em Itapema,
                    Santa Catarina."
                />   
                <MediaCard 
                    tituloFront="Formação"
                    tituloBack="Instituto Federal"
                    body="Atualmente estudo Sistema de Informação no Instituto Federal 
                    Catarinense - IFC, câmpus Camboriú. Estou no 3º período"
                />  
                <MediaCard 
                    tituloFront="Sobre mim"
                    tituloBack="Hobbies"
                    body="Gosto bastante de ir à praia, ir ao cinema, faço trilha. 
                    Também gosto
                    de ler livros relacionados a aventura e por último, mas não menos importante,
                    gosto de programar e criar coisas novas."
                />  
            </div>
    </div>
    )
}