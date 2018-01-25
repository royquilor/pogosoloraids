import React from 'react';

const TableHeader = (props) => {
  return (
      <th className="bb b--black-10 tl pv2 pr2 bg-white">
        {props.children}
      </th>
  )
}

export default TableHeader;
