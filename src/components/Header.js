import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>Soloed</h1>
      <h3>{props.tagline}</h3>
    </header>
  )
}

export default Header;
