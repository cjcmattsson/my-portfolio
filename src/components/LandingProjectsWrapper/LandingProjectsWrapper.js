import React, { Component } from 'react';
import LandingProject from '../LandingProject/LandingProject';

class LandingProjectsWrapper extends Component {

    render() {
      return (
        <div className="projectsWrapper">
          <div className="projectsContainer">
            <LandingProject/>
            <LandingProject/>
            <LandingProject/>
          </div>
        </div>
      );
    }
  }

  export default LandingProjectsWrapper;
