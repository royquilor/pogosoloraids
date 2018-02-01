import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="w-100 cf pa3">
      <h2 className="f3 f2-ns fw6 fl-ns db dib-ns">
        <span className={props.type}>{props.pokemon}</span>
      </h2>
      <div className="db dib-ns fr-ns f3 tr-ns">
        <span className="db"><small>perfect cp</small> {props.regularcp}</span>
        <span className="db"><small>weather boost</small> {props.weatherboostcp}</span>
      </div>
    </header>
  )
}

export default Header;
