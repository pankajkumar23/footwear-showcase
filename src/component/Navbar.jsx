import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // State to manage menu visibility

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav >
        <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>
      
        <IoMdMenu onClick={toggleMenu}  className='fa open'/> {/* Menu icon to open the menu */}

{isOpen && ( // Conditional rendering of the menu
  <ul className='menu'>
    <FaTimes onClick={toggleMenu} className='fa close'/> {/* Close icon to close the menu */}
    <a href=""><li>MENU</li></a>
    <a href=""><li>LOCATION</li></a>
    <a href=""><li>ABOUT</li></a>
    <a href=""><li>CONTACT</li></a>
  </ul>
)}
          
        
<button>Login</button>
        
      </nav>
    </div>
  )
}

export default Navbar
