import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/AcercaDe">Acerca de...</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>

            {/* <ul>
                <li><NavLink to="/" activeclassName="active">Inicio</NavLink></li>
                <li><NavLink to="/AcercaDe" activeclassName="active">Acerca de...</NavLink></li>
                <li><NavLink to="/Contacto" activeclassName="active">Contacto</NavLink></li>
            </ul> */}
        </nav>
     );
}
 
export default NavBar;