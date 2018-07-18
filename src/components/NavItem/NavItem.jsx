import React, { Component } from 'react';

class NavItem extends Component {

  render(){
    return (
      <li className="navItem">
        <a onClick={this.props.goToPage} data-link={this.props.item.link}>{this.props.item.name}</a>
      </li>
    )
  }
};

export default NavItem;
