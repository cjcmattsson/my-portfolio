import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

import Nav from '../Nav/Nav.jsx';
import NavLinks from '../NavItem/NavLinks';

import HeroPage from '../HeroPage/HeroPage';
import LandingProjectsWrapper from '../LandingProjectsWrapper/LandingProjectsWrapper';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingContact from '../LandingContact/LandingContact';
import Footer from '../Footer/Footer';


import FullPageProject from '../FullPageProject/FullPageProject';


class App extends Component {

  state = {
     navbar: "Navbar",
     menuText: "Menu",
     mobileMenu: "Close",
     projectHeader: "",
     projectImage: "",
   }

  top = () => {this.setState({navbar: "Navbar"})}
  down = () => {this.setState({navbar: "NavbarScroll"})}

  changeMenu = () => {
    if (this.state.menuText === "Menu") {
      this.setState({menuText: "Close", mobileMenu: "Open"})
    } else {
      this.setState({menuText: "Menu", mobileMenu: "Close"})
    }
  }

  closeMenu = () => {
    if (this.state.menuText === "Close") {
      this.setState({menuText: "Menu", mobileMenu: "Close"})
    }
  }

  showProjectContent = (name, image) => {
    console.log("hej");
    this.setState({
      projectHeader: name,
      projectImage: image,
    })
  }

  render() {
    return (
      <div className="App">
        <Nav
          scroll={this.state.navbar}
          logoCloseMenu={this.closeMenu}
          menu={this.state.menuText}
          changeMenu={this.changeMenu}
          mobileMenu={this.state.mobileMenu}
          navlinks={NavLinks}
        />
      <HeroPage/>
        <Waypoint
          topOffset={'45%'}
          onEnter={this.top}
          onLeave={this.down}
          />
        <div className="contentWrapper">
          <LandingProjectsWrapper
            showProjectContent={this.showProjectContent}
            />
          <LandingAbout />
          <LandingContact />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
