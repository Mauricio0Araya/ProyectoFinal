import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = function() {

const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
console.log("Cargando Navbar")

return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PFGames</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registrarse</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Carrito</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">Mi Perfil</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}


export default Navbar