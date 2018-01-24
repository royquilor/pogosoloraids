import React from 'react';
import './Table.css'

const Table = (props) => {
  return (
    <div>
      <h3>
        {props.heading}
      </h3>
      <table className="f6 w-100" cellSpacing="0">
        {props.children}
      </table>
    </div>
  )
}

export default Table;
