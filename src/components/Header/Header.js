import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header class="pa3 mw8 center cf pv6" data-name="slab-stat">
      <h1 className="f4 f2-ns fw6 mv0 tc"><span className={props.type}>{props.pokemon}</span></h1>
      <dl class="dib w-33 fl">
        <dd class="f6 fw4 ml0">Perfect CP</dd>
        <dd class="f3 fw6 ml0">{props.regularcp}</dd>
      </dl>
      <dl class="dib w-33 fl">
        <dd class="f6 fw4 ml0">Weather Boost</dd>
        <dd class="f3 fw6 ml0">{props.weatherboostcp}</dd>
      </dl>
      <dl class="dib w-33 fl">
        <dd class="f6 fw4 ml0">Prefers</dd>
        <dd class="f3 fw6 ml0 ttu">{props.likes}</dd>
      </dl>
    </header>

  )
}

export default Header;
