import React from 'react';
import TableCell from './TableCell'

class OnePokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>{this.props.raidboss}</TableCell>
          <TableCell>{this.props.moveset}</TableCell>
          <TableCell>{this.props.trainer}</TableCell>
          <TableCell><a href={this.props.link}>Link</a></TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
        </tr>
    )
  }
}

export default OnePokemon;
