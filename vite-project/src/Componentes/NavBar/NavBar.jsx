import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>        
        <Link to={"/"}>
          <button className="nav-button">Inicio</button>
        </Link>
        <Link to={"/character/Human"}>
          <button className="nav-button">Humanos</button>  
        </Link>
        <Link to={"/character/No Human"}>
          <button className="nav-button">No Humanos</button>
        </Link>
        <Link to={"/AcercaDe"}>
          <button className="nav-button">Acerca de</button>
        </Link>
    </nav>
  )
}

export default NavBar;
