import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="nav bt bb b--white-20 fixed w-100">
      <div className="nowrap overflow-x-auto">
        <NavLink to="/" exact={true} activeClassName="active"><span className="f5 f4-ns fw6">Pokesoloraids</span></NavLink>
        <NavLink to="/Alakazam" activeClassName="active psychic">Alakazam</NavLink>
        <NavLink to="/Gengar" activeClassName="active ghost">Gengar</NavLink>
        <NavLink to="/Machamp" activeClassName="active fighting">Machamp</NavLink>
        <NavLink to="/Ninetales" activeClassName="active fire">Ninetales</NavLink>
        <NavLink to="/Omastar" activeClassName="active water">Omastar</NavLink>
        <NavLink to="/Porygon" activeClassName="active normal">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active bug">Scyther</NavLink>
      </div>
    </nav>
  )
}

export default SiteNav;
