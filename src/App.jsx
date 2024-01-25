import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <div>
          <img src="/img1.jpg" alt="" />
          <img src={City} alt="" />
        </div>
      </div>
    </>
  );
}

export default App
