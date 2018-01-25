import React from 'react';
import './Table.css'

const Table = (props) => {
  return (
    <div>
      <h3 className="f5 f3-ns fw6">
        {props.heading}
      </h3>
      <div className="overflow-auto">
        <table className="f6 w-100" cellSpacing="0">
          {props.children}
        </table>
      </div>
    </div>
  )
}

export default Table;
