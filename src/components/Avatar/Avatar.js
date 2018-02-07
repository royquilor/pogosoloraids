import React from 'react';
import './Avatar.css'

const Avatar = (props) => {
  return (
    <div className="">
      <div className="dt fr">
        <a className="dtc v-mid" href={props.href}>{props.text}</a>
      </div>
    </div>
  )
}

export default Avatar;
