import React, { Component } from 'react';
import NavItem from '../NavItem/NavItem.jsx';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

  goToPage = (event) => {
      event.preventDefault();
      const link = event.target.getAttribute("data-link");
      this.props.history.push(`${link}`);
    };

  render(){

    let scroll = this.props.scroll;
    
    return (
      <nav className={scroll}>
        <div className="navContent">
            <div className="logotype">
              <p>CrippCore</p>
            </div>
            <div className="menu">
              <ul>
                {this.props.navlinks && this.props.navlinks.map((navlink, key) => {
                  return <NavItem item={navlink} key={key} goToPage={this.goToPage}/>
                })}
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default withRouter(Nav);
