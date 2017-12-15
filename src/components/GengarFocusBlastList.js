import React, { Component } from 'react'
import Pokemon from './Pokemon';
import Table from './Table/Table';
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

class GengarFocusBlastList extends Component {

  render() {

    const { gengarfb } = this.props;

    const GengarFocusBlastList = gengarfb.map(pokemon => {
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
        <Table heading={"Focus Blast"}>
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
          {GengarFocusBlastList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default GengarFocusBlastList;
