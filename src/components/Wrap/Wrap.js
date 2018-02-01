import React from 'react';
import './Wrap.css'

const Wrap = (props) => {
  return (
    <div className="pa3 pt4 pt5-ns black-70">
      {props.children}
    </div>
  )
}

export default Wrap;
