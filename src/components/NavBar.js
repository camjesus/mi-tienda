import logo from "../logo-linea.png"

const Navbar = () => {
    return (
        <div>
            <div className="nav-line"></div>
            <div className="navBar">
            <ul>
            <li className="li-left"><a href="">Remeras</a></li>
            <li className="li-left"><a href="">Buzos</a></li>
            <li className="li-right"><a href="">Pilusos</a></li>
            <li className="li-right"><a href="">Pantalones</a></li>
            </ul>
            <img src={logo} className="img-calyx" alt="logo" />
        </div>
        </div>
        
    )
}
export default Navbar;