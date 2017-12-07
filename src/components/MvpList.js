import React, { Component } from 'react'
import MvpPokemon from './MvpPokemon';
import Table from './Table';
import TableHeader from './TableHeader'

class MvpList extends Component {

  render() {

    const { mvp } = this.props;

    const mvpList = mvp.map(pokemon => {
      return (
        <MvpPokemon key={pokemon.id} name={pokemon.name} moveset={pokemon.moveset} raidboss={pokemon.raidboss} classname={pokemon.classname}/>
      )
    })

    return (
      <div>
        <Table heading={"MVP"}>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Raidboss</TableHeader>
          </tr>
        </thead>
        <tbody>
          {mvpList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default MvpList;
