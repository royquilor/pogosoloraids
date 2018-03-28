import React from 'react';
import TableCell from '../Table/TableCell'

class PerfectPokemon extends React.Component {
  render(){
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>{this.props.raidboss}</TableCell>
          <TableCell>{this.props.perfectcp}</TableCell>
          <TableCell>{this.props.boostedcp}</TableCell>
        </tr>
    )
  }
}

export default PerfectPokemon;
