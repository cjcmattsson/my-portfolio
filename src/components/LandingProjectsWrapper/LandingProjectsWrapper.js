import React, { Component } from 'react';
import LandingProject from '../LandingProject/LandingProject';

class LandingProjectsWrapper extends Component {

    render() {
      return (
        <div className="projectsWrapper">
          <div className="projectsHeader">
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ipsum lectus, interdum at orci in, placerat convallis justo. Nulla euismod mollis purus quis
            facilisis. Etiam ac ultrices ipsum. Vestibulum feugiat nunc velit, nec facilisis quam blandit
            </p>
          </div>
          <div className="projectsContainer">
            <LandingProject name="LOKALBONDEN"/>
            <LandingProject name="THRIVE"/>
            <LandingProject name="IPLAY"/>
            <LandingProject name="AKADEMISKA HUS"/>
          </div>
        </div>
      );
    }
  }

  export default LandingProjectsWrapper;