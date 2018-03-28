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
          raidboss={pokemon.raidboss}
          perfectcp={pokemon.perfectcp}
          boostedcp={pokemon.boostedcp}/>
      )
    })

    return (
      <div className="perfect record-1 fadeIn">
        <Table heading={"Perfect IV"}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Perfect CP</TableHeader>
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
