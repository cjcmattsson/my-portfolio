import React, { Component } from 'react';
import './HeroPage.css';

class HeroPage extends Component {
  render() {
    return (
      <div className="heroPage">
        <div className="container">
          <h1>{this.props.text}</h1>
        </div>
      </div>
    )
  }
}

export default HeroPage;
