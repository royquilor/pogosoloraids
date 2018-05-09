import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header className="pa3-ns mw8 center cf pv3 pt6-ns" data-name="slab-stat">
      <h1 className="f4 f2-ns fw6 mt0 mb3 tc fadeIn">{props.pokemon}</h1>
      <div className="flex flex-wrap justify-center-ns">
        <dl className="pv1 pv3-ns ph2 ph4-ns">
          <dd className="f3 fw6 perfectcp-stat fadeInDown">{props.regularcp}</dd>
          <dd className="f7 fw4 perfectcp fadeIn">Perfect CP</dd>
        </dl>
        <dl className="pv1 pv3-ns ph2 ph4-ns">
          <dd className="f3 fw6 weatherboost-stat fadeInDown">{props.weatherboostcp}</dd>
          <dd className="f7 fw4 weatherboost fadeIn">Weather Boost</dd>
        </dl>
        <dl className="pv1 pv3-ns ph2 ph4-ns">
          <dd className="f3 fw6 prefers-stat fadeInDown">{props.likes}</dd>
          <dd className="f7 fw4 prefers fadeIn">Prefers</dd>
        </dl>
      </div>
    </header>

  )
}

export default Header;
