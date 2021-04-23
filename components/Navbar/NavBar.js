import React, { Component } from 'react';
import ActiveLink from '../Link';
import { MenuItems } from './MenuItems';
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
class NavBar extends Component {
  state = { clicked: false }

  handleClick = ()  => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return(
      <nav className="NavbarItems">
        <h1 className='navbar-logo'>Vithusan</h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} color="azure" height="30px"></FontAwesomeIcon>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
}


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