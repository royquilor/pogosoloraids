import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="nav">
      <div className="nowrap overflow-x-auto">
        <NavLink to="/" exact={true} activeClassName="active">Home</NavLink>
        <NavLink to="/Alakazam" activeClassName="active">Alakazam</NavLink>
        <NavLink to="/Gengar" activeClassName="active">Gengar</NavLink>
        <NavLink to="/Machamp" activeClassName="active">Machamp</NavLink>
        <NavLink to="/Ninetales" activeClassName="active">Ninetales</NavLink>
        <NavLink to="/Omastar" activeClassName="active">Omastar</NavLink>
        <NavLink to="/Porygon" activeClassName="active">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active">Scyther</NavLink>
      </div>
    </nav>
  )
}

export default SiteNav;
