import React from 'react';
import TableCell from '../Table/TableCell'

class OnePokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>{this.props.raidboss}</TableCell>
          <TableCell>{this.props.bossmoveset}</TableCell>
          <TableCell>{this.props.trainer}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.moveset}</TableCell>
          <TableCell>{this.props.level}</TableCell>
          <TableCell>{this.props.cp}</TableCell>
          <TableCell><a href={this.props.link}>Link</a></TableCell>
        </tr>
    )
  }
}

export default OnePokemon;
