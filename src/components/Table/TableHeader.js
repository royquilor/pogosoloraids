import React from 'react';

const TableHeader = (props) => {
  return (
      <th className="fw6 bb b--black-10 tl pv3 pr3 bg-white">
        {props.children}
      </th>
  )
}

export default TableHeader;
