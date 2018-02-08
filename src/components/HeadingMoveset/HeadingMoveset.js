import React from 'react';
import './HeadingMoveset.css'

const HeadingMoveset = (props) => {
  return (
    <h3 className="heading-moveset f6 f5-ns fw4 lh-copy nav flex xjustify-center items-center justify-between flex-column flex-row-ns">
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
