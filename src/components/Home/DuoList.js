import React, { Component } from 'react'
import DuoPokemon from './DuoPokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class DuoList extends Component {

  render() {

    const { duo } = this.props;

    const duoList = duo.map(pokemon => {
      return (
        <DuoPokemon
          key={pokemon.id}
          raidboss={pokemon.raidboss}
          bossmoveset={pokemon.bossmoveset}
          weather={pokemon.weather}
          trainer1={pokemon.trainer1}
          trainer2={pokemon.trainer2}
          classname={pokemon.classname}
          moveset={pokemon.moveset}
          name={pokemon.name}
          cp={pokemon.cp}
          link={pokemon.link}/>
      )
    })

    return (
      <div className="record-5 fadeIn">
        <Table heading={"Duo"}>
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
          {duoList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default DuoList;
