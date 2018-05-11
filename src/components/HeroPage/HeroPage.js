import React, { Component } from 'react';

class HeroPage extends Component {
  render() {
    return (
      <div className="heroPage">
        <div className="heroContainer">
          <h1>{this.props.text}</h1>
        </div>
      </div>
    )
  }
}

export default HeroPage;
