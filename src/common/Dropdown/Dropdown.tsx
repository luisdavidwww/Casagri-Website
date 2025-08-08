import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Dropdown.css";

import { SubMenu } from "./SubMenu";

// Define la interfaz para los props del componente
interface DropdownProps {
  ClickDrop: boolean;
}

// Define el tipo de cada ítem de SubMenu (modifica según la estructura real)
interface SubMenuItem {
  id: number | string;
  name: string;
  href: string;
  img: string
}

function Dropdown({ ClickDrop }: DropdownProps) {

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleItemHover = (index: number) => {
    setHoveredItem(index);
  };

  const handleItemNull = (value: null) => {
    setHoveredItem(value);
  };

  useEffect(() => {
    console.log(SubMenu);
  }, []);

  return (
    <>
      <div className="dropsito">
        <div
          className={ClickDrop ? "dropdown_menu_occho" : "dropdown_menu_occho desactive"}
        >
          {SubMenu.map((link: SubMenuItem, index: number) => (
            <div
              className={ClickDrop ? "dropdown-list-option" : "dropdown-list-option desactive"}
              key={link.id}
              onMouseEnter={() => handleItemHover(index)}
              onMouseLeave={() => handleItemNull(null)}
            >
              <Link
                to='#'
                className="content-dropdown-list"
              >
                <img src={link.img} alt={link.name} className="imgCategory"/>
                <h3 className="titleCategory">{link.name}</h3>
              </Link>
            </div>
          ))}
        </div>

        
      </div>
      <div className={ClickDrop ? "backgraundBlack" : "backgraundBlack desactive"}></div>
    </>
  
  );
}

export default Dropdown;
