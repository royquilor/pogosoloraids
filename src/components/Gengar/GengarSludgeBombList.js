import React, { Component } from 'react'
import Pokemon from '../Pokemon';
import Table from '../Table/Table';
import TableHeader from '../TableHeader'
import TableFooter from '../TableFooter'

class GengarSludgeBombList extends Component {

  render() {

    const { gengarsgb } = this.props;

    const GengarSludgeBombList = gengarsgb.map(pokemon => {
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
        <Table heading={"Sludge Bomb"}>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <TableFooter>
          link
        </TableFooter>
        <tbody>
          {GengarSludgeBombList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default GengarSludgeBombList;
