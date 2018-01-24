import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <div className="w-100 cf">
        <div className="fl">
          <h1>Pokesoloraids</h1>
        </div>
        <a className="fr white fw6" href="">Submit a Raid</a>
      </div>
      <h3>{props.tagline}</h3>
      {props.children}
    </header>
  )
}

export default Header;
