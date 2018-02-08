import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="pa3-ns mw8 center cf pv3 pv6-ns" data-name="slab-stat">
      <h1 className="f4 f2-ns fw6 mv0 tc"><span className={props.type}>{props.pokemon}</span></h1>
      <div className="mv3">
      <dl className="dib w-50 w-33-ns fl">
        <dd className="f6 fw4 ml0">Perfect CP</dd>
        <dd className="f3 fw6 ml0">{props.regularcp}</dd>
      </dl>
      <dl className="dib w-50 w-33-ns fl">
        <dd className="f6 fw4 ml0">Weather Boost</dd>
        <dd className="f3 fw6 ml0">{props.weatherboostcp}</dd>
      </dl>
      <dl className="dib w-100 w-33-ns fl-ns">
        <dd className="f6 fw4 ml0">Prefers</dd>
        <dd className="f3 fw6 ml0 ttu">{props.likes}</dd>
      </dl>
      </div>
    </header>

  )
}

export default Header;
