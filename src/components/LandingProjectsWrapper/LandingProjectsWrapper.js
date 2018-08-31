import React, { Component } from 'react';
import LandingProject from '../LandingProject/LandingProject';
import projects from '../projectList';

class LandingProjectsWrapper extends Component {

    render() {

      return (
        <div id="projects" className="projectsWrapper">
          <div className="projectsHeader">
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ipsum lectus, interdum at orci in, placerat convallis justo. Nulla euismod mollis purus quis
            facilisis. Etiam ac ultrices ipsum. Vestibulum feugiat nunc velit, nec facilisis quam blandit
            </p>
          </div>
          <div className="projectsContainer">
            {projects.map((project, key) => {
              return <LandingProject
                  name={project.name}
                  info={project.info}
                  slogan={project.slogan}
                  year={project.year}
                  pic={project.pic}
                  key={key}
                />
              })
            }
          </div>
        </div>
      );
    }
  }

  export default LandingProjectsWrapper;
