import React from 'react';
import './Avatar.css'

const Avatar = (props) => {
  return (
      <div className="">
        <a className="f6 f5-ns fw4" href={props.href}>{props.text}</a>
      </div>
  )
}

export default Avatar;
