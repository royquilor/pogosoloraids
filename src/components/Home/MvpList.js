import React, { Component } from 'react'
import MvpPokemon from './MvpPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class MvpList extends Component {

  render() {

    const { mvp } = this.props;

    const mvpList = mvp.map(pokemon => {
      return (
        <MvpPokemon key={pokemon.id} name={pokemon.name} moveset={pokemon.moveset} raidboss={pokemon.raidboss} classname={pokemon.classname}/>
      )
    })

    return (
      <div className="record-2 fadeIn">
        <Table heading={"MVP"}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Raid Boss</TableHeader>
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
