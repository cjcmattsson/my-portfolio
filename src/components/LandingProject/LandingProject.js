import React, { Component } from 'react';



class LandingProject extends Component {
  render() {

    const backgroundImage = {
      backgroundImage: `url(${this.props.pic})`,
    };

    return (
      <div className="landingProject">
        <h2>{this.props.name}</h2>
        <div className="content">
          <div className="hidden-content">
            <h3>{this.props.slogan}<span> - {this.props.year}</span></h3>
            <p>{this.props.info}</p>
          </div>
          <div className="overlay-content" style={backgroundImage}></div>
        </div>
      </div>
    )
  }
}


export default LandingProject;
