import React from 'react';
import './Table.css'

const Table = (props) => {
  return (
    <div>
      <h3 className="f3 fw4 tracked-mega ttu tc mb3">
        {props.heading}
      </h3>
      <div className="overflow-auto table-wrap">
        <table className="f6 f5-ns w-100" cellSpacing="0">
          {props.children}
        </table>
      </div>
    </div>
  )
}

export default Table;
