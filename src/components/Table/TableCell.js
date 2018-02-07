import React from 'react';

const TableCell = (props) => {
  return (
      <td className="pv2 pr2 b--black-20">
        {props.children}
      </td>
    )
}

export default TableCell;
