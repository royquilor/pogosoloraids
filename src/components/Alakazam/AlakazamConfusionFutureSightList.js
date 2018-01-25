import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class AlakazamConfusionFutureSightList extends Component {

  render() {

    const { alakazamcfs } = this.props;

    const AlakazamConfusionFutureSightList = alakazamcfs.map(pokemon => {
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
          <span class="psychic">Confusion</span> &ndash; <span class="psychic">Future Sight</span>
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
          {AlakazamConfusionFutureSightList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://www.youtube.com/watch?v=1VbY2YinRE8">youtube - pokecuno</a>
      </div>
    );

  }

}

export default AlakazamConfusionFutureSightList;
