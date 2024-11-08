import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

import Header from "./Componentes/Header/Header"

import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage"
import AboutPage from "./Pages/Aboutpage/AboutPage"
import AcercaDe from "./Pages/AcercaDe/AcercaDe"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/character/:races" element={<CharacterPage/>}/>
          <Route path="/details/:id" element={<AboutPage/>}/>
          <Route path="/AcercaDe" element={<AcercaDe/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App