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
          classname={pokemon.classname}
          moveset={pokemon.moveset}
          name={pokemon.name}
          link={pokemon.link}/>
      )
    })

    return (
      <div className="record-4 fadeIn one">
        <Table heading={"1v1"}>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>Counter</TableHeader>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Proof</TableHeader>
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
