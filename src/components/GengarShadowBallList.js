import React, { Component } from 'react'
import Pokemon from '../../components/Pokemon';
import Table from '../../components/Table/Table';
import TableHeader from '../../components/TableHeader'
import TableFooter from '../../components/TableFooter'

class GengarShadowBallList extends Component {

  render() {

    const { gengarsb } = this.props;

    const GengarShadowBallList = gengarsb.map(pokemon => {
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
        <Table heading={"Shadow Ball"}>
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
          {GengarShadowBallList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default GengarShadowBallList;
