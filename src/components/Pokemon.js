import React from 'react';
import TableCell from './TableCell'

class Pokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.level}</TableCell>
          <TableCell>{this.props.iv}</TableCell>
          <TableCell>{this.props.cp}</TableCell>
          <TableCell>{this.props.moveset}</TableCell>
        </tr>
    )
  }
}

export default Pokemon;
