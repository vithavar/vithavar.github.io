import React, { Component, useEffect, useState } from 'react';
import ActiveLink from '../Link';
import { MenuItems } from './MenuItems';
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


function NavBar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = ()  => {
    setClick(!click);
    // setNavbar(!navbar);
  }

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  // render() {
  return(
    <nav className={navbar ? "navbar navbar--active" : "navbar"}>
      <h1 className='navbar-logo'><FontAwesomeIcon icon={faVuejs} height="30px"></FontAwesomeIcon></h1>
      <div className='menu-icon' onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} color="azure" height="30px"></FontAwesomeIcon>
      </div>
      <ul className={click ? 'nav-menu nav-menu--active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
// }


// const navBarStyle = {
//     backgroundColor: "red",
//     color: "white",
//     width: "100%",
//     height: "60px"
//   };
  
//   const NavBar = () => (
//     <div className="NavBar" style={navBarStyle}>
//       NAVBAR
//     </div>
//   );
  
  export default NavBar;