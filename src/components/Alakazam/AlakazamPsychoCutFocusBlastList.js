import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'

class AlakazamPsychoCutFocusBlastList extends Component {

  render() {

    const { alakazampcfb } = this.props;

    const AlakazamPsychoCutFocusBlastList = alakazampcfb.map(pokemon => {
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
          type2="fighting"
          chargemove="Focus Blast"
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
          {AlakazamPsychoCutFocusBlastList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://www.youtube.com/watch?v=wDJSRwBgOJ8">youtube - Anuj Kulkarni</a>
      </div>
    );

  }

}

export default AlakazamPsychoCutFocusBlastList;
