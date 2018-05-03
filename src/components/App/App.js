import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import HeroPage from '../HeroPage/HeroPage';
import ProjectsWrapper from '../ProjectsWrapper/ProjectsWrapper';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HeroPage text="Welcome Suckas"/>
        <ProjectsWrapper />
      </div>
    );
  }
}

export default App;
