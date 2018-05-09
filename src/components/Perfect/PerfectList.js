import React, { Component } from 'react'
import PerfectPokemon from './PerfectPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class PerfectList extends Component {

  render() {

    const { perfect } = this.props;

    const PerfectList = perfect.map(pokemon => {
      return (
        <PerfectPokemon
          key={pokemon.id}
          type={pokemon.type}
          raidboss={pokemon.raidboss}
          perfectcp={pokemon.perfectcp}
          boostedcp={pokemon.boostedcp}/>
      )
    })

    return (
      <div className="perfect record-1 fadeIn perfect">
        <Table heading={""}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Lv20</TableHeader>
            <TableHeader>Boosted</TableHeader>
          </tr>
        </thead>
        <tbody>
          {PerfectList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default PerfectList;
