import React, { Component } from 'react';

class LandingProject extends Component {

  onHoverShow = () => {
    console.log(this.props.project);
  }

  render() {

    let showHideProject = this.props.project;

    return (
      <div
        className={showHideProject}
        onMouseEnter={this.props.showProject}
        onMouseLeave={this.props.hideProject}>
        <h2>{this.props.name}</h2>
        <div className="content">
          <div className="hidden-content">
            <p>hjehje</p>
          </div>
          <div className="overlay-content"></div>
        </div>
      </div>
    )
  }
}


export default LandingProject;
