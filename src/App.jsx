import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'


import Rodape from './Components/rodape/Rodape'
import Menu from './Components/ComponenteMenu/Menu'
import Rotas from './Components/ComponenteMenu/RotasDoMenu'


function App() {
  return (
      <Router>
        <div className="App">
            <Menu/>
          <main>
            <Rotas/>
          </main>
          <footer>
            <Rodape/>
          </footer>
        </div>
      </Router>
  )
}

export default App;
