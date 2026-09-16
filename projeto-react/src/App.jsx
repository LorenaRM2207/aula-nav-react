import { useState } from 'react'

import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

import './App.css'

function App() {
  const [pagina, setPagina] = useState('home')

  const renderizarPagina=()=>{
    if(pagina === 'home') return <Home/>
    if(pagina === 'sobre') return <Sobre/>
    if(pagina === 'contato') return <Contato/>
  
  }

  return (
    <div>
      <h1>Meu site favorito em react (o primeiro)</h1>
      <nav>
        <button onClick={()=>setPagina('home')}>Home</button>
        <button onClick={()=>setPagina('sobre')}>Sobre</button>
        <button onClick={()=>setPagina('contato')}>Contato</button>
      </nav>
      <div>
        {renderizarPagina()}
      </div>
    </div>
      
  )
}

export default App
