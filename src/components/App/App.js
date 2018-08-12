import React, { Component } from 'react';

import Nav from '../Nav/Nav.jsx';
import NavLinks from '../NavItem/NavLinks';

import HeroPage from '../HeroPage/HeroPage';
import LandingProjectsWrapper from '../LandingProjectsWrapper/LandingProjectsWrapper';
import LandingAbout from '../LandingAbout/LandingAbout';
import LandingContact from '../LandingContact/LandingContact';
import Footer from '../Footer/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav navlinks={NavLinks}/>
        <HeroPage text="Welcome Suckas"/>
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
