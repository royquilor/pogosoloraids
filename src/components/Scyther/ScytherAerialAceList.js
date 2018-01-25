import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class ScytherAerialAceList extends Component {

  render() {

    const { scytheraa } = this.props;

    const ScytherAerialAceList = scytheraa.map(pokemon => {
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
          <span class="flying">Aerial Ace</span>
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
          {ScytherAerialAceList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://youtu.be/bZFBXEX4aDk">link updated</a>
      </div>
    );

  }

}

export default ScytherAerialAceList;
