import React, { Component } from 'react';
import LandingProject from '../LandingProject/LandingProject';
import projects from '../projectList';
import FullPageProject from '../FullPageProject/FullPageProject';

class LandingProjectsWrapper extends Component {


  render() {
    let fullPageProject = null;
    if(this.props.showProject) {
      fullPageProject = (
        <FullPageProject
        projectHeader={this.props.projectHeader}
        projectImage={this.props.projectImage}
        showProjectContent={this.props.showProjectContent}
        />
      )
    };
    return (
      <div id="projects" className="projectsWrapper">
        <div className="projectsHeader">
          <h1>Projects</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ipsum lectus, interdum at orci in, placerat convallis justo. Nulla euismod mollis purus quis
          facilisis. Etiam ac ultrices ipsum. Vestibulum feugiat nunc velit, nec facilisis quam blandit
          </p>
        </div>
        {fullPageProject}
        <div className="projectsContainer">
        {projects.map((project, key) => {
          return <LandingProject
          showProjectContent={this.props.showProjectContent}
          name={project.name}
          info={project.info}
          slogan={project.slogan}
          year={project.year}
          pic={project.pic}
          longText={project.longText}
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
