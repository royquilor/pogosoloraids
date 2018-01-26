import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'

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
          {AlakazamPsychoCutFutureSightList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://www.youtube.com/watch?v=UKngej9jk40">youtube - Anuj Kulkarni</a>
      </div>
    );

  }

}

export default AlakazamPsychoCutFutureSightList;
