import React from 'react';
import './Wrap.css'

const Wrap = (props) => {
  return (
    <div className="black-70 mw8 center">
      {props.children}
    </div>
  )
}

export default Wrap;
