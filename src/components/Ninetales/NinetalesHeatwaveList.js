import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import TableFooter from '../Table/TableFooter'

class NinetalesHeatwaveList extends Component {

  render() {

    const { ninetalesh } = this.props;

    const NinetalesHeatwaveList = ninetalesh.map(pokemon => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          level={pokemon.level}
          iv={pokemon.iv}
          cp={pokemon.cp}
          moveset={pokemon.moveset}
          classname={pokemon.classname}
          />
      )
    })

    return (
      <div>
        <Table heading={"Heatwave"}>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <TableFooter>
          <a href="https://youtu.be/bZFBXEX4aDk">link updated</a>
        </TableFooter>
        <tbody>
          {NinetalesHeatwaveList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default NinetalesHeatwaveList;
