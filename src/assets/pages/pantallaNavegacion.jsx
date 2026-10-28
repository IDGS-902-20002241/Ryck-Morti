import { NavLink } from "react-router-dom";
import "../styles/Navegacion.css";
import { useAuth } from "../auth/AuthContext";

export default function PantallaNavegacion() {
  const { autenticado, usuario, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rick and Morty</div>

      <div className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Inicio
        </NavLink>
        <NavLink
          to="/femeninos"
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Personajes femeninos
        </NavLink>
        <NavLink
          to="/personajes"
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Personajes muertos
        </NavLink>
        <NavLink
          to="/detalles"
          className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"
          }
        >
          Dealles de la historia
        </NavLink>

        {autenticado ? (
          <>
            <span>Hola {usuario}</span>
            <button onClick={logout}>Salir de la sesion</button>
          </>
        ) : (
          <NavLink to="/login" className={({ isActive }) =>
            isActive ? "nav-link activo" : "nav-link"} >Entrar a la sesion</NavLink>
        )}
      </div>
    </nav>
  );
}
