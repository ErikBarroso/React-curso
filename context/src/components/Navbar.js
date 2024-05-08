import  "./NavBar.css";

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>Sobre</NavLink>
    <NavLink to='/products'>Produtos</NavLink>
    </nav>
    </div>
  )
}

export default Navbar