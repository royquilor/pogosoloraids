import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="nav dt-ns w-100 border-box ">
      <NavLink to="/" exact={true} className="dtc-ns v-mid mid-gray link dim w-100 w-25-ns logo" activeClassName="active">SoloRaid</NavLink>

      <div className="nowrap overflow-x-auto overflow-y-hidden dtc-ns v-mid w-100 w-75-ns tr f7 f6-ns">
        <NavLink to="/Alakazam" activeClassName="active psychic">Alakazam</NavLink>
        <NavLink to="/Gengar" activeClassName="active ghost">Gengar</NavLink>
        <NavLink to="/Machamp" activeClassName="active fighting">Machamp</NavLink>
        <NavLink to="/Ninetales" activeClassName="active fire">Ninetales</NavLink>
        <NavLink to="/Omastar" activeClassName="active water">Omastar</NavLink>
        <a className="dib submit pv2 ph3 ml3 xfr" href="">Contact</a>
        {/*
        <NavLink to="/Porygon" activeClassName="active ">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active ">Scyther</NavLink>
        */}
      </div>

    </nav>
  )
}

export default SiteNav;
