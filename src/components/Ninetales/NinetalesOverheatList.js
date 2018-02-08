import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class NinetalesOverheatList extends Component {

  render() {

    const { ninetaleso } = this.props;

    const NinetalesOverheatList = ninetaleso.map(pokemon => {
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
          type1="fire"
          fastmove="Overheat">
          <Avatar
            text="youtube"
            href="/"
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
          {NinetalesOverheatList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default NinetalesOverheatList;
