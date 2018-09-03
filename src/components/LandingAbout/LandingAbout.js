import React, { Component } from 'react';

class LandingAbout extends Component {

    render() {
      return (
        <div id="about" className="aboutWrapper">
          <div className="aboutHeader">
            <h1>Who / What / Why</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ipsum lectus, interdum at orci in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            ipsum lectus, interdum at orci in.
            </p>
          </div>
          <div className="aboutSection">
              <div className="aboutSectionContent">
                <div className="aboutImage"></div>
                <p><span>Who I am</span> - Lorem ipsum dolor sit amet, consectetur Pellentesque
                ipsum lectus, interdum at orci in.</p>
              </div>
          </div>
          <div className="aboutSection">
              <div className="aboutSectionContent">
                <div className="aboutImage"></div>
                <p><span>What I do</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque</p>
              </div>
          </div>
          <div className="aboutSection">
              <div className="aboutSectionContent">
                <div className="aboutImage"></div>
                <p><span>Why I do it</span> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                ipsum</p>
              </div>
          </div>
        </div>
      );
    }
  }

  export default LandingAbout;
