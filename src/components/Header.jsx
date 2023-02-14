import Hamburger from 'hamburger-react';
import SideMenu from './SideMenu';

function Header () {

  const showSideMenu = (toggled) => {
    console.log(toggled);
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
