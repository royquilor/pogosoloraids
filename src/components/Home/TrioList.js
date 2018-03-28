import React, { Component } from 'react'
import TrioPokemon from './TrioPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class TrioList extends Component {

  render() {

    const { trio } = this.props;

    const trioList = trio.map(pokemon => {
      return (
        <TrioPokemon
          key={pokemon.id}
          raidboss={pokemon.raidboss}
          bossmoveset={pokemon.bossmoveset}
          weather={pokemon.weather}
          trainer1={pokemon.trainer1}
          trainer2={pokemon.trainer2}
          trainer3={pokemon.trainer3}
          classname={pokemon.classname}
          moveset={pokemon.moveset}
          name={pokemon.name}
          link={pokemon.link}/>
      )
    })

    return (
      <div className="record-6 fadeIn">
        <Table heading={"Trio"}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Weather</TableHeader>
            <TableHeader>Counters</TableHeader>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Proof</TableHeader>
          </tr>
        </thead>
        <tbody>
          {trioList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default TrioList;
