import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class AlakazamPsychoCutFutureSightList extends Component {

  render() {

    const { alakazampcfs } = this.props;

    const AlakazamPsychoCutFutureSightList = alakazampcfs.map(pokemon => {
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
          fastmove="Psycho Cut"
          type2="psychic"
          chargemove="Future Sight">
          <Avatar
            text="youtube - Anuj Kulkarni"
            href="https://www.youtube.com/watch?v=UKngej9jk40"
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
          {AlakazamPsychoCutFutureSightList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default AlakazamPsychoCutFutureSightList;
