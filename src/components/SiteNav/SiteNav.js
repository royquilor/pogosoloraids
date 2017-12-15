import React from 'react';
import './SiteNav.css'

import {
  Link
} from 'react-router-dom';

const SiteNav = (props) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Gengar">Gengar</Link>
      
    </nav>
  )
}

export default SiteNav;
