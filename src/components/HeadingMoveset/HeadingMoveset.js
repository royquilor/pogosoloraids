import React from 'react';
import './HeadingMoveset.css'

const HeadingMoveset = (props) => {
  return (
    <h3 className="f6 f5-ns fw4 cf lh-copy">
      <div className="fl-ns">
      <span className={props.type1}>
        {props.fastmove}
      </span> &nbsp;
      <span className={props.type2}>
        {props.chargemove}
      </span>
      </div>
      {props.children}
    </h3>
  )
}

export default HeadingMoveset;
