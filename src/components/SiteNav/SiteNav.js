import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="nav flex xjustify-center items-center justify-between">
      <NavLink to="/" exact={true} className="mid-gray link dim logo " activeClassName="active">SoloRaid</NavLink>
      <div className="f7 f6-ns tc tc-ns">
        <NavLink to="/Alakazam" className="mh3 pv2" activeClassName="active psychic">Alakazam</NavLink>
        <NavLink to="/Gengar" className="mh3 pv2" activeClassName="active ghost">Gengar</NavLink>
        <NavLink to="/Machamp" className="mh3 pv2" activeClassName="active fighting">Machamp</NavLink>
        <NavLink to="/Ninetales" className="mh3 pv2" activeClassName="active fire">Ninetales</NavLink>
        <NavLink to="/Omastar" className="mh3 pv2" activeClassName="active water">Omastar</NavLink>
        {/*
        <NavLink to="/Porygon" activeClassName="active ">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active ">Scyther</NavLink>
        */}
      </div>
      <a className="dib submit pv1 ph2 pv2-ns ph3-ns " href="">Contact</a>

    </nav>
  )
}

export default SiteNav;
