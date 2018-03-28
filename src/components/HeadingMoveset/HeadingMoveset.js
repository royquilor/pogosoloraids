import React from 'react';
import './HeadingMoveset.css'

const HeadingMoveset = (props) => {
  return (
    <h3 className="heading-moveset nav flex items-center justify-between flex-column flex-row-ns mb0">
      <div className="">
        <span className={props.type1}>
          {props.fastmove}
        </span>
        <span className={props.type2}>
          {props.chargemove}
        </span>
      </div>
      {props.children}
    </h3>
  )
}

export default HeadingMoveset;
