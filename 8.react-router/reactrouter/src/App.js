import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id' element={<Product />} />
       </Routes>
     </BrowserRouter>
   
    </div>
  );
}
export default App;
