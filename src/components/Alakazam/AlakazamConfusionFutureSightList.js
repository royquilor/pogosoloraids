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
          moveset={pokemon.moveset}
          iv={pokemon.iv}
          level={pokemon.level}
          cp={pokemon.cp}
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
          chargemove="Future Sight">
          <Avatar
            text="youtube - pokecuno"
            href="https://www.youtube.com/watch?v=1VbY2YinRE8"
            />
        </HeadingMoveset>
        <Table>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>CP</TableHeader>
          </tr>
        </thead>
        <tbody>
          {AlakazamConfusionFutureSightList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default AlakazamConfusionFutureSightList;
