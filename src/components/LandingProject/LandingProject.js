import React, { Component } from 'react';



class LandingProject extends Component {

  render() {
    return (
      <div className="landingProject"
        onClick={() => {
          this.props.showProjectContent(
            this.props.name,
            this.props.longText
          )}
        }
        >
        <div className="expandingBox"></div>
        <h2>{this.props.name}</h2>
        <div className="content">
          <div className="hidden-content">
            <h3>{this.props.slogan}<span> - {this.props.year}</span></h3>
            <p>{this.props.info}</p>
          </div>
          <div className="overlay-content"></div>
        </div>
      </div>
    )
  }
}


export default LandingProject;
