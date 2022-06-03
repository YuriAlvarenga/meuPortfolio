import React from "react"
import './destaques.css'

import MediaCard from "../../Components/ComponenteDestaque/ComponenteDestaques"


export default function Destaques(){
    return(
    <div className="QuadroDestaques">
        <div className="TituloDestaques"><h2>DESTAQUES</h2></div>
            <div className='CardsDestaques'>
                <MediaCard/>   
                <MediaCard/>  
                <MediaCard/>  
            </div>
    </div>
    )
}