import React, { Component } from 'react';

class FullPageProject extends Component {

  render() {
    return (
      <div className="fullPageProjectWrapper">
        <div className="overlay" onClick={this.props.showProjectContent}></div>
        <div className="content">
          <header>
            <h2>{this.props.projectHeader}</h2>
            <div className="closeProject" onClick={this.props.showProjectContent}>Close</div>
          </header>
          <div className="info">
            <p>{this.props.projectHeader}</p>
          </div>
        </div>
      </div>
    )
  };
};

export default FullPageProject;
