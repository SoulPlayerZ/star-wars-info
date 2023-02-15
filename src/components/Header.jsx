import Hamburger from 'hamburger-react';
import SideMenu from './SideMenu';
import "../css/header.css";
import { useContext } from 'react';
import HamburgerContext from '../context/HamburguerContext';

function Header () {
  const { setActive } = useContext(HamburgerContext);

  const showSideMenu = (toggled) => {
    setActive(toggled);
  }
 
  return(
    <header>
      <Hamburger onToggle={(toggled) => showSideMenu(toggled)}/>
      <SideMenu />
      <h1>STAR WARS LOGO</h1>
    </header>
  )
}

export default Header;
