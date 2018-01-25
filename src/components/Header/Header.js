import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="black-70 w-100 cf">
      <a className="f5 f4-ns fw6 link black-70 ph3">Pokesoloraids</a>
      {props.children}
    </header>
  )
}

export default Header;
