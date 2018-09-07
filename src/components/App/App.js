import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Nav from '../Nav/Nav.jsx';
import NavLinks from '../NavItem/NavLinks';

import HeroPage from '../HeroPage/HeroPage';
import LandingProjectsWrapper from '../LandingProjectsWrapper/LandingProjectsWrapper';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingContact from '../LandingContact/LandingContact';
import Footer from '../Footer/Footer';


class App extends Component {

  state = {
     navbar: "Navbar",
     menuText: "Menu",
     mobileMenu: "Close"
   }

  top = () => {this.setState({navbar: "Navbar"})}
  down = () => {this.setState({navbar: "NavbarScroll"})}

  openMenu = () => {
    if (this.state.menuText === "Menu") {
      this.setState({menuText: "Close", mobileMenu: "Open"})
    } else {
      this.setState({menuText: "Menu", mobileMenu: "Close"})
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          scroll={this.state.navbar}
          menu={this.state.menuText}
          openMenu={this.openMenu}
          mobileMenu={this.state.mobileMenu}
          navlinks={NavLinks}
        />
        <HeroPage text="Howdy!"/>
        <Waypoint
          topOffset={'45%'}
          onEnter={this.top}
          onLeave={this.down}
          />
        <div className="contentWrapper">
          <LandingProjectsWrapper/>
          <LandingAbout />
          <LandingContact />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
