import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav>
      <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
      <NavLink to="/Gengar" activeClassName="active">Gengar</NavLink>

    </nav>
  )
}

export default SiteNav;
