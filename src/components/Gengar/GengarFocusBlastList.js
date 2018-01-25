import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'

class GengarFocusBlastList extends Component {

  render() {

    const { gengarfb } = this.props;

    const GengarFocusBlastList = gengarfb.map(pokemon => {
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
        <h3>
          <span class="fighting">Focus Blast</span>
        </h3>
        <Table>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <tbody>
          {GengarFocusBlastList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://www.reddit.com/r/TheSilphRoad/comments/79jple/just_soloed_cfb_alakazam_with_level_31_mons_very/">link updated</a>
      </div>
    );

  }

}

export default GengarFocusBlastList;
