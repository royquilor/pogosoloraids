import React, { Component } from 'react'
import FastestPokemon from './FastestPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class FastestList extends Component {

  render() {

    const { fastest } = this.props;

    const fastestList = fastest.map(pokemon => {
      return (
        <FastestPokemon key={pokemon.id} name={pokemon.name} trainer={pokemon.trainer} time={pokemon.time} link={pokemon.link} classname={pokemon.classname}/>
      )
    })

    return (
      <div>
        <Table heading={"Fastest"}>
        <thead>
          <tr>
            <TableHeader>Raid Boss</TableHeader>
            <TableHeader>Trainer</TableHeader>
            <TableHeader>Time Left</TableHeader>
            <TableHeader>Link</TableHeader>
          </tr>
        </thead>
        <tbody>
          {fastestList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default FastestList;