import { Link } from "react-router-dom";
import { useContext } from 'react';
import HamburgerContext from '../context/HamburguerContext';

function SideMenu () {
  const { active } = useContext(HamburgerContext);

  return(
    <nav className={`${active ? "showMenu" : "hideMenu" }`}>
      <Link to="/" className="menu-item">Characters</Link>
      <Link to="/movies" className="menu-item">Movies</Link>
      <Link to="/planets" className="menu-item">Planets</Link>
      <Link to="/starships" className="menu-item">Starships</Link>
      <Link to="/vehicles" className="menu-item">Vehicles</Link>
    </nav>
  )
}

export default SideMenu;
