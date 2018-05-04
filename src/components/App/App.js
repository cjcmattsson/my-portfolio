import React, { Component } from 'react';
import '../../index.css';

import Nav from '../Nav/Nav.jsx';
import NavLinks from '../NavItem/NavLinks';

import HeroPage from '../HeroPage/HeroPage';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav navlinks={NavLinks}/>
        <HeroPage text="Welcome Suckas"/>
        <ProjectsWrapper />
      </div>
    );
  }
}

export default App;
