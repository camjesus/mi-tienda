import './NavBar.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <div className="nav-line"></div>
            <div className="navBar">
            <ul>
            <li className="li-left">
                <h1 className='logo-text'>Calyx</h1>
            </li>
            <li className="li-right">
                <NavLink 
                to="/category/tshirt">Remeras</NavLink>
            </li>
            <li className="li-right">
                <NavLink 
                to="/category/hoodie">Buzos</NavLink>
            </li>
            <li className="li-right">
                <NavLink 
                to="/">Home</NavLink>
            </li>
            </ul>
        </div>
        </div>
    )
}
export default Navbar;