import './App.css'

import Content from './Components/rotas/Content';
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from "../src/Components/Layout/MenuToggle/Menu"
import Rodape from './Components/rodape/Rodape'

function App() {
  return (
      <Router>
        <div className="App">
          <Menu />
          <Content />
          <Rodape/>
        </div>
      </Router>
  )
}

export default App;
