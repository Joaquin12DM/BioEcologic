import { Link, NavLink } from 'react-router-dom';
import './Style/NavBar.css'
import carrito from './assets/carrito.png';


export const Navbar = () => {
    return (
        <>
            <nav className="Nav">

                <div>
                    <Link
                        className="containerLogo"
                        to="/StylePulse"
                    >
                        BIOECOLOGIC ECOPACK

                    </Link>
                </div>

                <div className='container-navbar'>
                    <Link
                        className="navbar"
                        to="/Tienda"
                    >
                        Tienda
                    </Link>

                    <Link
                        className="navbar"
                        to="/Contacto"
                    >
                        Contacto
                    </Link>
                    <Link
                        className="navbar"
                        to="/Nosotros"
                    >
                        Nosotros
                    </Link>

                    <Link
                        className="nav-item"
                        to="/login"
                    >
                        <img src={carrito} alt="" />
                    </Link>
                </div>


            </nav>
        </>
    )
}