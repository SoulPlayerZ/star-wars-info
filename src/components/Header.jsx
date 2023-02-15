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
      <section className='hamburguer-container'>
        <Hamburger className="a" onToggle={(toggled) => showSideMenu(toggled)}/>
      </section>
      <SideMenu />
      <h1 className='logo'>STAR WARS LOGO</h1>
    </header>
  )
}

export default Header;
