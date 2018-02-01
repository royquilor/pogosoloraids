import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="w-100 cf pa3">
      <h2 className="f2 fw6 fl dib">
        <span className={props.type}>{props.pokemon}</span>
      </h2>
      <span className="dib fr f3">{props.regularcp}/{props.weatherboostcp}<small> cp</small></span>
    </header>
  )
}

export default Header;
