import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class OmastarHydroPumpList extends Component {

  render() {

    const { omastarhp } = this.props;

    const OmastarHydroPumpList = omastarhp.map(pokemon => {
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
        <h3>
          <span class="water">Hydro Pump</span>
        </h3>
        <Table>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <tbody>
          {OmastarHydroPumpList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://youtu.be/bZFBXEX4aDk">link updated</a>
      </div>
    );

  }

}

export default OmastarHydroPumpList;
