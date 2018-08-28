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
   }

  top = () => {this.setState({navbar: "Navbar"})}

  down = () => {this.setState({navbar: "NavbarScroll"})}

  render() {
    return (
      <div className="App">
        <Nav scroll={this.state.navbar} navlinks={NavLinks}/>
        <HeroPage text="Christopher Mattsson"/>
        <Waypoint
          topOffset={'30%'}
          onEnter={this.top}
          onLeave={this.down}
          />
        <div className="contentWrapper">
          <LandingProjectsWrapper />
          <LandingAbout />
          <LandingContact />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
