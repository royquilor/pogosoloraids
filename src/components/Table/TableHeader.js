import React from 'react';

const TableHeader = (props) => {
  return (
      <th className="tl pv2 pr2 bg-white ttu fw6 f7 tracked">
        {props.children}
      </th>
  )
}

export default TableHeader;
