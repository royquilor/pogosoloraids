import React, { Component } from 'react'
import OnePokemon from './OnePokemon';
import Table from './Table';
import TableHeader from './TableHeader'

class OneList extends Component {

  render() {

    const { one } = this.props;

    const oneList = one.map(pokemon => {
      return (
        <OnePokemon key={pokemon.id} raidboss={pokemon.raidboss} moveset={pokemon.moveset} trainer={pokemon.trainer} link={pokemon.link} classname={pokemon.classname} name={pokemon.name}/>
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
