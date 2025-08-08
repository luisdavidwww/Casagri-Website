import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//LogoCasagri
import CasagriNavbar from '../static/CasagriNavbar.svg';
import Dropdown from './Dropdown/Dropdown';

//Estilos
import './Navbar.css';

//icons
import { AiFillCaretDown } from "react-icons/ai";


const Navbar = () => {
  const [clickDrop, setClickDrop] = useState<boolean>(false);

  // refs para elementos que queremos controlar (debes asignarlos al JSX)
  const refOne = useRef<HTMLDivElement>(null);

  // abrir Ventana Desplegable
  const abrirVentanaDesplegable = () => {
    setClickDrop(!clickDrop);
  };

  // Escucha cualquier click en el documento para cerrar la ventana desplegable
  const handleclickOutside = (e: Event) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setClickDrop(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleclickOutside, true);
    return () => {
      document.removeEventListener('click', handleclickOutside, true);
    };
  }, []);


  return (
    <>
      <nav className='navbar-init' ref={refOne} >
         <a href='/' className='navbar-logo'>
            <img src={ CasagriNavbar } alt="Casagri" /> 
          </a>
        <ul className='nav-menu' >
         
          <li className='nav-item'>
            <NavLink
              to="#" className='nav-links-two'
            >
              Inicio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#" className='nav-links-two'
              onClick={() => { abrirVentanaDesplegable() }}
              >
              Catálogo <AiFillCaretDown style={{fontSize:'0.8rem',paddingLeft:'0.2rem', marginTop:'0.25rem'}}/>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#" className='nav-links-two'
            >
              Nosotros
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#" className='nav-links-two'
              >
              Noticias
            </NavLink>   
          </li>
          <li className='nav-item'>
            <NavLink
              to="#" className='nav-links-two'
              >
              Clientes
            </NavLink>   
          </li>
        </ul>
      </nav>
      <div >
        <Dropdown ClickDrop={clickDrop} />
      </div>
    </>
  );
}

export default Navbar;
