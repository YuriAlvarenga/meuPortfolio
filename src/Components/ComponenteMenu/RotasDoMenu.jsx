
import React from "react"

import { Routes, Route } from 'react-router-dom'

import Inicio from '../../views/abaInicio/Inicio'
import Projetos from '../../views/abaProjetos/Projetos'



const Rotas = props =>{
    return(
        <main>
            <Routes>
                <Route exact path = "/" element = {<Inicio />}>
                    </Route>
                <Route exact path = "/projetos" element = {<Projetos/>}>
                    </Route>
            </Routes>
        </main>
    )
}
export default Rotas