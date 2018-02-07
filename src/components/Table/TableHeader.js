import React from 'react';

const TableHeader = (props) => {
  return (
      <th className="b--black-20 tl pv3 pr2 bg-white ttu fw6">
        {props.children}
      </th>
  )
}

export default TableHeader;
