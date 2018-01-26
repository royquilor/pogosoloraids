import React from 'react';
import './HeadingMoveset.css'

const HeadingMoveset = (props) => {
  return (
    <h3 className="f5 f4-ns fw6">
      <span className={props.type1}>
        {props.fastmove}
      </span> &nbsp;
      <span className={props.type2}>
        {props.chargemove}
      </span>
    </h3>
  )
}

export default HeadingMoveset;
