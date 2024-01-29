import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {

  return (
      <div className='App'>
        <h2>Forms</h2>
        <MyForm user={{name: "erik", email: "erik@gmail.com" }}/>
      </div>
  )
}

export default App
