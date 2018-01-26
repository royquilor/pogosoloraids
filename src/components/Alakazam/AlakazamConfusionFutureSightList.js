import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import Avatar from '../Avatar/Avatar'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'

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
        <HeadingMoveset
          type1="psychic"
          fastmove="Confusion"
          type2="psychic"
          chargemove="Future Sight"
          />
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
        <Avatar
          text="youtube - pokecuno"
          href="https://www.youtube.com/watch?v=1VbY2YinRE8"
          />
      </div>
    );

  }

}

export default AlakazamConfusionFutureSightList;
