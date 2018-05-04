import React from 'react';

const NavItem = (props) => (
  <li className="navItem">
    <a href={props.item.link}>{props.item.name}</a>
  </li>
)

export default NavItem;
