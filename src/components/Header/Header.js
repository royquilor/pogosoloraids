import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h1>Soloed</h1>
      <h3>{props.tagline}</h3>
    </header>
  )
}

export default Header;
