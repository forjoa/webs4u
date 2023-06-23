import './styles/Header.css'
import logo from './assets/photo-logo.png'

function Header() {

    return (
      <>
      <header>
        <div className="logo">
          <img src={logo}></img>
          <p>CODE MATCH</p>
        </div>
        <div className="navbar">
          <nav>
            <ul>
              <li><a>Inicio</a></li>
              <li><a>Nosotros</a></li>
              <li><a>Buscar</a></li>
            </ul>
          </nav>
        </div>
      </header>
      </>
    )
  }
  
  export default Header