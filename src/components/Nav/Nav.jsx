import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.jsx';
import { withRouter } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

class Nav extends Component {
/*
  goToPage = (event) => {
      event.preventDefault();
      const link = event.target.getAttribute("data-link");
      this.props.history.push(`${link}`);
    };
*/



render(){
    let scroll = this.props.scroll;
    let mobileMenu = this.props.mobileMenu;

    return (
      <nav className={scroll}>
        <div className="navContent">
            <div className="logotype">
              <p><Scrollchor to="#home" className="nav-link">Christopher<br/>Mattsson</Scrollchor></p>
            </div>
            <div className="menu">
              <div className="mobileMenuButton" onClick={this.props.openMenu}>{this.props.menu}</div>
              <ul>
                {this.props.navlinks && this.props.navlinks.map((navlink, key) => {
                  return <NavItem item={navlink} key={key}/>
                })}
              </ul>
            </div>
            <div className={mobileMenu}>
              <ul>
                {this.props.navlinks && this.props.navlinks.map((navlink, key) => {
                  return <NavItem item={navlink} key={key}/>
                })}
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default withRouter(Nav);
