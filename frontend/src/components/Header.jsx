import '../styles/Header.css'

import logo from '../assets/photo-logo.png'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import Login from './Login.jsx'

function Header() {

  // To change burguer classes 
  const [burger_class, setBurguer_class] = useState('burger-bar unclicked')
  const [menu_class, setMenu_class] = useState('menu hidden')
  const [is_menu_clicked , setIs_menu_clicked] = useState(false)

  // Login pop-up
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Toggle burguer menu change 
  const updateMenu = () => {
    if (!is_menu_clicked) {
      setBurguer_class('burger-bar clicked')
      setMenu_class('menu visible')
    } else {
      setBurguer_class('burger-bar unclicked')
      setMenu_class('menu hidden')
    }
    setIs_menu_clicked(!is_menu_clicked)
  }

  // Open login popup
  const handleOpenDialog = () => {
    setIsDialogOpen(true)
  }

  // Close login popup
  const handleCloseDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <header>

        <div className="logo">
          <img src={logo}></img>
          <p>CODE MATCH</p>
        </div>

        <div className="navbar">

          <nav className={menu_class}>
            <ul>
              <li><Link to='/'>Inicio</Link></li>
              <li><a href='#us'>Nosotros</a></li>
              <li><Link to='/search'>Buscar</Link></li>
              <li><button onClick={handleOpenDialog}>Iniciar Sesión</button></li>
            </ul>
          </nav>

          {isDialogOpen && <Login />}

          <div className="burger-menu">
            <div className={burger_class} onClick={updateMenu}></div>
            <div className={burger_class} onClick={updateMenu}></div>
            <div className={burger_class} onClick={updateMenu}></div>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header