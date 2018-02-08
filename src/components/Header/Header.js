import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="pa3-ns mw8 center cf pv3 pv6-ns" data-name="slab-stat">
      <h1 className="f4 f2-ns fw6 mt0 mb3 tc-ns"><span className={props.type}>{props.pokemon}</span></h1>
      <div className="flex flex-wrap justify-center-ns  ">
        <dl className="pv3 ph4">
          <dd className="f6 fw4 ">Perfect CP</dd>
          <dd className="f3 fw6 ">{props.regularcp}</dd>
        </dl>
        <dl className="pv3 ph4">
          <dd className="f6 fw4 ">Weather Boost</dd>
          <dd className="f3 fw6 ">{props.weatherboostcp}</dd>
        </dl>
        <dl className="pv3 ph4">
          <dd className="f6 fw4 ">Prefers</dd>
          <dd className="f3 fw6 ttu">{props.likes}</dd>
        </dl>
      </div>
    </header>

  )
}

export default Header;
