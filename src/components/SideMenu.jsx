import { Link } from "react-router-dom";

function SideMenu () {
  return(
    <nav>
        
      <Link to="/">Characters</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  )
}

export default SideMenu;