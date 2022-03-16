import React from "react"
import './content.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/Home'
import Habilidade from '../../views/Habilidades'

const Content = props =>{
    return(
        <main>
            <Routes>
                <Route exact path = "/" element = {<Home />}>
                    </Route>
                <Route exact path="/Habilidade" element = {<Habilidade />}>
                    </Route>
            </Routes>
        </main>
    )
}
export default Content