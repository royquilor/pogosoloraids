import React from 'react';
import './Header.css'

const Header = (props) => {
  return (
    <header class="pa3" data-name="slab-stat">
      <h1 className="f4 f2-ns fw6 mv0">{props.pokemon}</h1>
      <dl class="dib mr5">
        <dd class="f6 fw4 ml0">Perfect CP</dd>
        <dd class="f3 fw6 ml0">{props.regularcp}</dd>
      </dl>
      <dl class="dib mr5">
        <dd class="f6 fw4 ml0">Weather Boost</dd>
        <dd class="f3 fw6 ml0">{props.weatherboostcp}</dd>
      </dl>
      <dl class="dib mr5">
        <dd class="f6 fw4 ml0">Likes</dd>
        <dd class="f3 fw6 ml0 ttu">{props.likes}</dd>
      </dl>
      <dl class="dib mr5">
        <dd class="f6 fw4 ml0">Counters Boost</dd>
        <dd class="f3 fw6 ml0 ttu">{props.counters}</dd>
      </dl>
    </header>

  )
}

export default Header;
