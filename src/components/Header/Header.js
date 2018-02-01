import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="w-100 cf pa3">
      <h2 className="f2 fw6 fl dib">
        <span className={props.type}>{props.pokemon}</span>
      </h2>
      <div className="dib fr f3 tr">
        <span className="db"><small>perfect cp</small> {props.regularcp}</span>
        <span className="db"><small>weather boost</small> {props.weatherboostcp}</span>
      </div>
    </header>
  )
}

export default Header;
