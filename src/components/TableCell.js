import React from 'react';

const TableCell = (props) => {
  return (
      <td className="pv2 pr3 bb b--black-10">
        {props.children}
      </td>
    )
}

export default TableCell;
