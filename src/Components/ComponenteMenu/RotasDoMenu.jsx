
import React from "react"

import { Routes, Route } from 'react-router-dom'

import Inicio from '../../views/abaInicio/Inicio'
import Projetos from '../../views/abaProjetos/Projetos'
import SobreEsteSite from "../../views/abaSobreEsteSite/SobreEsteSite"
import Contato from "../../views/EntreEmContato/Contato"



const Rotas = props =>{
    return(
        <main>
            <Routes>
                <Route exact path = "/" element = {<Inicio />}>
                    </Route>
                <Route exact path = "/projetos" element = {<Projetos/>}>
                    </Route>
                <Route exact path = "/sobreestesite" element = {<SobreEsteSite/>}>
                    </Route>
                <Route exact path = "/contatos" element = {<Contato/>}>
                    </Route>
            </Routes>
        </main>
    )
}
export default Rotas