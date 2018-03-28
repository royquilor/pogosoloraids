import React from 'react';
import './Table.css'

const Table = (props) => {
  return (
    <div>
      <h3 className="mv0 pv2">
        {props.heading}
      </h3>
      <div className="overflow-auto table-wrap">
        <table className="w-100" cellSpacing="0">
          {props.children}
        </table>
      </div>
    </div>
  )
}

export default Table;
