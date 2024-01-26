import { Fragment } from 'react';
import './App.css'
import ExecuteFunction from './components/ExecuteFunction';

function App() {

  function showMessage(){
    console.log("Evento do Componente Pai");
  }
  return (
      <div>
        <h1>Avançando em React</h1>
        <ExecuteFunction myFunction={showMessage}/>
      </div>
  );
}

export default App
