import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.jsx';
import '../../index.css';

class Nav extends Component {
  render(){
    return (
      <nav className="Navbar">
        <div className="navContent">
            <div className="logotype">
              <p>CrippCore</p>
            </div>
            <div className="menu">
              <ul>
                {this.props.navlinks && this.props.navlinks.map((navlink, key) => {
                  return <NavItem item={navlink} key={key} />
                })}
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default Nav;
