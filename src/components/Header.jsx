import Hamburger from 'hamburger-react'

function Header () {
 
  return(
    <header>
      <Hamburger onToggle={(toggled) => console.log(toggled) }/>
      HEADER AQUI
    </header>
  )
}

export default Header;
