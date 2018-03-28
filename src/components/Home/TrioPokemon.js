import React from 'react';
import TableCell from '../Table/TableCell'

class TrioPokemon extends React.Component {
  render(){
    //const { details } = this.props;
    return (
        <tr>
          <TableCell>{this.props.id}</TableCell>
          <TableCell>{this.props.raidboss}</TableCell>
          <TableCell>{this.props.bossmoveset}</TableCell>
          <TableCell>{this.props.weather}</TableCell>
          <TableCell><span className={this.props.classname}>{this.props.name}</span></TableCell>
          <TableCell>{this.props.moveset}</TableCell>
          <TableCell><a href={this.props.link}>{this.props.trainer1}<br/>{this.props.trainer2}<br/>{this.props.trainer3}</a></TableCell>
        </tr>
    )
  }
}

export default TrioPokemon;
