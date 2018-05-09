import React, { Component } from 'react'
import FastestPokemon from './FastestPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class FastestList extends Component {

  render() {

    const { fastest } = this.props;

    const fastestList = fastest.map(pokemon => {
      return (
        <FastestPokemon
          key={pokemon.id}
          name={pokemon.name}
          trainer={pokemon.trainer}
          time={pokemon.time}
          link={pokemon.link}
          notes={pokemon.notes}
          classname={pokemon.classname}
        />
      )
    })

    return (
      <div className="record-3 fadeIn">
        <Table heading={"Fastest"}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Time</TableHeader>
            <TableHeader>Proof</TableHeader>
            <TableHeader>&nbsp;</TableHeader>
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
