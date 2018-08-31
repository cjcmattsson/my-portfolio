import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class NavItem extends Component {

  render(){
    return (
      <li className="navItem">
        <Scrollchor to={this.props.item.link} animate={{offset: -70, duration: 400}} className="nav-link">{this.props.item.name}</Scrollchor>
      </li>
    )
  }
};

export default NavItem;
