import { Link } from "react-router-dom" ;
import "../css/Navbar.css"


function Nav(){

    return(
<nav className="navbar" > 
<div className="navbar-brand">
    <Link to="/">React project</Link>

</div>
<div className="navbar-links">
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/favorites" className="nav-link">Favorites</Link>

</div>

</nav>







    );



}

export default Nav;