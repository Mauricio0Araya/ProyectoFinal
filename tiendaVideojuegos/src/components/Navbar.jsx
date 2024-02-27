import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useContext } from "react"; //Se añade el 2-11-2024 para poder configurar botón de Cerrar Sesión
import {UserContext} from "../components/Context/userContext"; //Se añade el 2-11-2024 para poder configurar botón de Cerrar Sesión


const Navbar = function() {

const setActiveClass = ({isActive}) => (isActive ? "active" : undefined);
const {user, setUser} = useContext(UserContext);

const cerrarSesion= () => {

    setUser(null)
}


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
          
            <NavLink className={user ? "navlinkDesactivado" : "nav-link" } to="/login">Iniciar Sesión</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={user ? "navlinkDesactivado" : "nav-link"} to="/signup">Registrarse</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Carrito</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className={user ? "nav-link dropdown-toggle" : "navlinkDesactivado"} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Configuración
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="nav-link" to="/profile">Mi Perfil</NavLink></li>
            <li><NavLink className="nav-link" to="/purchasehistory">Mis Compras</NavLink></li>
            <li><NavLink className="nav-link" to="/favorites">Favoritos</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className={user ? "nav-link" : "navlinkDesactivado"} to="/" onClick={cerrarSesion}>Cerrar Sesión</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}


export default Navbar