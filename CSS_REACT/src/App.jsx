import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const redTitle = false

  return (
      <div>
        <h1>CSS com React</h1>
        <h2 className={redTitle ? "red-title" : "title"}>Classe dinâmica</h2>
      </div>
  )
}

export default App
