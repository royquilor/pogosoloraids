import React, { Component } from 'react'
import OnePokemon from './OnePokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class OneList extends Component {

  render() {

    const { one } = this.props;

    const oneList = one.map(pokemon => {
      return (
        <OnePokemon
          key={pokemon.id}
          raidboss={pokemon.raidboss}
          bossmoveset={pokemon.bossmoveset}
          trainer={pokemon.trainer}
          link={pokemon.link}
          classname={pokemon.classname}
          moveset={pokemon.moveset}
          name={pokemon.name}
          level={pokemon.level}
          cp={pokemon.cp}/>
      )
    })

    return (
      <div>
        <Table heading={"1v1"}>
        <thead>
          <tr>
            <TableHeader>Raidboss</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Trainer</TableHeader>
            <TableHeader>Link</TableHeader>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>CP</TableHeader>
          </tr>
        </thead>
        <tbody>
          {oneList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default OneList;
