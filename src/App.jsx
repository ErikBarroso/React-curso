import { useState } from 'react'
import './App.css'
import City from "./assets/city.jpg"
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando em React</h1>
        <div>
          {/* <img src="/img1.jpg" alt="" />
          <img src={City} alt="" /> */}
        </div>
        {/* <ManageData /> */}
        {/* <ListRender/> */}
        {<ConditionalRender/>}
      </div>
    </>
  );
}

export default App
