import React from 'react';
import TableCell from './TableCell'

class FastestPokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.trainer}</TableCell>
          <TableCell>{this.props.time}</TableCell>
          <TableCell><a href={this.props.link}>Link</a></TableCell>
        </tr>
    )
  }
}

export default FastestPokemon;
