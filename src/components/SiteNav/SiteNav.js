import React from 'react';
import './SiteNav.css'

import {
  NavLink
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav className="pa3 nav flex xjustify-center items-center justify-between flex-column flex-row-l relative">
      <NavLink to="/" exact={true} className="link logo f5 f4-ns pt1 pto-ns lh-solid absolute top-0 left-0 relative-l" activeClassName="active">RaidRec</NavLink>
      <div className="f7 f6-ns tc tc-ns pv3 pv0-l">
        <NavLink to="/Machamp" className="link mh2 pv3 pv0-ns" activeClassName="active fighting">Machamp</NavLink>
        <NavLink to="/Alakazam" className="link mh2 pv3 pv0-ns" activeClassName="active psychic">Alakazam</NavLink>
        <NavLink to="/Claydol" className="link mh2 pv3 pv0-ns" activeClassName="active psychic">Claydol</NavLink>
        <NavLink to="/Tyranitar" className="link mh2 pv3 pv0-ns" activeClassName="active ice">Tyranitar</NavLink>
        <NavLink to="/Mewtwo" className="link mh2 pv3 pv0-ns" activeClassName="active water">Mewtwo</NavLink>
        {/*
        <NavLink to="/Porygon" activeClassName="active ">Porygon</NavLink>
        <NavLink to="/Scyther" activeClassName="active ">Scyther</NavLink>
        */}
      </div>
      <a className="dib submit pv1 ph2 pv2-ns ph3-ns f7 absolute top-0 right-0 relative-l" href="">Contact</a>

    </nav>
  )
}

export default SiteNav;
