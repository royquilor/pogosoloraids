import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="black-70">
      <div className="w-100 cf">
        <div className="fl">
          <a className="dib f5 f4-ns fw6 mt0 mb1 link black-70 ph3">Pokesoloraids</a>
        </div>
      </div>
      <h3>{props.tagline}</h3>
      {props.children}
    </header>
  )
}

export default Header;
