import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="nav dt-ns w-100 border-box pv3 pv0-ns">
      <NavLink to="/" exact={true} className="dtc-ns v-mid mid-gray link dim w-100 w-25-ns logo mb3 mb0-ns" activeClassName="active">SoloRaid</NavLink>

      <div className="nowrap overflow-x-auto overflow-y-hidden dtc-ns v-mid w-100 w-75-ns tr f7 f6-ns">
        <NavLink to="/Alakazam" className="mr4 mr3-ns" activeClassName="active psychic">Alakazam</NavLink>
        <NavLink to="/Gengar" className="mr4 mr3-ns" activeClassName="active ghost">Gengar</NavLink>
        <NavLink to="/Machamp" className="mr4 mr3-ns" activeClassName="active fighting">Machamp</NavLink>
        <NavLink to="/Ninetales" className="mr4 mr3-ns" activeClassName="active fire">Ninetales</NavLink>
        <NavLink to="/Omastar" className="mr4 mr3-ns" activeClassName="active water">Omastar</NavLink>
        <a className="dib submit pv1 ph2 pv2-ns ph3-ns ml3 absolute top-2 right-1 top-0-ns right-0-ns relative-ns" href="">Contact</a>
        {/*
        <NavLink to="/Porygon" activeClassName="active ">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active ">Scyther</NavLink>
        */}
      </div>

    </nav>
  )
}

export default SiteNav;
