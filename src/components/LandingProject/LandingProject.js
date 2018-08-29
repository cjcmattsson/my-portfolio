import React, { Component } from 'react';

class LandingProject extends Component {

  render() {
    return (
      <div className="landingProject">
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
