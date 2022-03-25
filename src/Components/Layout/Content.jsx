import React from "react"
import './content.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/Home'
import Inicio from '../../views/Inicio'
import Habilidade from '../../views/Habilidades'
import Curriculo from '../../views/Curriculo'


const Content = props =>{
    return(
        <main>
            <Routes>
                <Route exact path = "/" element = {<Home />}>
                    </Route>
                <Route exact path = "/Inicio" element = {<Inicio />}>
                    </Route>
                <Route exact path="/Habilidade" element = {<Habilidade />}>
                    </Route>
                <Route exact path="/Curriculo" element={<Curriculo/>}></Route>
                
            </Routes>
        </main>
    )
}
export default Content