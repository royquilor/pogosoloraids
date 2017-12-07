import React from 'react';
import TableCell from './TableCell'

class MvpPokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.moveset}</TableCell>
          <TableCell>{this.props.raidboss}</TableCell>
        </tr>
    )
  }
}

export default MvpPokemon;
