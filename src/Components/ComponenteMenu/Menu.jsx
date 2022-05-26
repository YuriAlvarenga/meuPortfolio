import React from "react"
import './menu.css'
import { Link } from "react-router-dom"


export default function Menu(){
    return(

            <div className="Menu">
                <ul className="ItensListaMenu">
                    <Link to="/" className="ItensMenu">INÍCIO</Link>
                    <Link to="/projetos" className="ItensMenu" >PROJETOS</Link>
                    <Link to="/#" className="ItensMenu">SOBRE ESTE SITE</Link>
                    <Link to="/#" className="ItensMenu">CONTATOS</Link>
                </ul>
            </div>
    )
}