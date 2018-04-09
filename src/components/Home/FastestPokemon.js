import React from 'react';
import TableCell from '../Table/TableCell'

class FastestPokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.time}</TableCell>
          <TableCell><a href={this.props.link}>{this.props.trainer}</a></TableCell>
          <TableCell>{this.props.notes} &nbsp;</TableCell>
        </tr>
    )
  }
}

export default FastestPokemon;
