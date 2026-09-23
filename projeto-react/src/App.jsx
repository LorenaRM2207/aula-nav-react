import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import {Link, Routes, Route} from 'react-router'
import './App.css'

function App() {

  return (
    <div>
      <h1>Meu site favorito em react (o primeiro)</h1>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/sobre'>Sobre </Link>
        <Link to='/contato'>Contato </Link>
      </nav>
      <hr/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='contato' element={<Contato/>}/>
      </Routes>
    </div>
      
  )
}

export default App
