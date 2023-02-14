import Hamburger from 'hamburger-react'
import { useState } from 'react';
function Header () {
 
  return(
    <header>
      <Hamburger onToggle={toggled => "..."} />
      HEADER AQUI
    </header>
  )
}

export default Header;
