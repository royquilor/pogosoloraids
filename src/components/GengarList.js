import React, { Component } from 'react'
import Pokemon from './Pokemon';
import Table from './Table';
import TableHeader from './TableHeader'
import TableFooter from './TableFooter'

class GengarList extends Component {

  render() {

    const { gengar } = this.props;

    const GengarList = gengar.map(pokemon => {
      return (
        <Pokemon key={pokemon.id} name={pokemon.name} level={pokemon.level} iv={pokemon.iv} cp={pokemon.cp} moveset={pokemon.moveset} classname={pokemon.classname}/>
      )
    })

    return (
      <div>
        <h3>Gengar</h3>
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
          {GengarList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default GengarList;
