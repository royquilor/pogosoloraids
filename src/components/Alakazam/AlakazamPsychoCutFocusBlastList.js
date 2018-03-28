import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

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
      <div className="record-4 fadeIn">
        <HeadingMoveset
          type1="psychic"
          fastmove="Psycho Cut"
          type2="fighting"
          chargemove="Focus Blast">
          <Avatar
            text="youtube - Anuj Kulkarni"
            href="https://www.youtube.com/watch?v=wDJSRwBgOJ8"
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
          {AlakazamPsychoCutFocusBlastList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default AlakazamPsychoCutFocusBlastList;
