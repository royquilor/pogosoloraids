import React from 'react';
import './Avatar.css'

const Avatar = (props) => {
  return (
    <div className="w-100 cf mb4">
      <div className="dt fr">
        <a className="dtc v-mid" href={props.href}>{props.text}</a>
      </div>
    </div>
  )
}

export default Avatar;
