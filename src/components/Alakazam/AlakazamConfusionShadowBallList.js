import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import TableFooter from '../Table/TableFooter'

class AlakazamConfusionShadowBallList extends Component {

  render() {

    const { alakazamcsb } = this.props;

    const AlakazamConfusionShadowBallList = alakazamcsb.map(pokemon => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          level={pokemon.level}
          iv={pokemon.iv}
          cp={pokemon.cp}
          moveset={pokemon.moveset}
          classname={pokemon.classname}
          />
      )
    })

    return (
      <div>
        <Table heading={"Confusion / Shadow Ball"}>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <TableFooter>
          link
        </TableFooter>
        <tbody>
          {AlakazamConfusionShadowBallList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default AlakazamConfusionShadowBallList;
