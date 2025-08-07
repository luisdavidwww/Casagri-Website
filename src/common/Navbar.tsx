// Navbar.js
import { NavLink } from 'react-router-dom';

import CasagriNavbar from '../static/CasagriNavbar.svg';



const Navbar = () => {

  return (
    <>
      <nav>

      <a href='/' className='navbar-logo'>
            <img src={ CasagriNavbar } alt="HelpDes" /> 
        </a>

        <ul >
          <li className='nav-item'>
            <NavLink
              to="/"
            >
              INICIO
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="/Nosotros"
              >
              NOSOTROS
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/Clientes'
            >
              CLIENTES
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="/Contacto"
              >
              CONTACTO
            </NavLink>   
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
