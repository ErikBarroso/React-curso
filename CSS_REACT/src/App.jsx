import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'

function App() {

  const redTitle = false

  return (
      <div>
        <h1>CSS com React</h1>
        <Title/>
      </div>
  )
}

export default App
