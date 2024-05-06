import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NavBar from './components/NavBar';
import Info from './pages/Info';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
     <h1>React Router</h1>
     <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products/:id/info' element={<Info />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='*' element={<NotFound />} />
       </Routes>
     </BrowserRouter>
   
    </div>
  );
}
export default App;
