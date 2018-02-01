import React from 'react';
import './Wrap.css'

const Wrap = (props) => {
  return (
    <div className="black-70 pa3">
      {props.children}
    </div>
  )
}

export default Wrap;
