import React from 'react';

const TableFooter = (props) => {
  return (
    <tfoot>
      <tr>
        <td className="fw6 bb b--black-10 tl pv2 pr2 bg-white" colSpan="5">
          {props.children}
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter;
