import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'

class MachampDynamicPunchList extends Component {

  render() {

    const { machampdp } = this.props;

    const MachampDynamicPunchList = machampdp.map(pokemon => {
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
        <HeadingMoveset
          type1="fighting"
          fastmove="Dynamic Punch"
          />
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
          {MachampDynamicPunchList}
        </tbody>
        </Table>
        <a className="db mb4" href="https://www.reddit.com/r/TheSilphRoad/comments/79jple/just_soloed_cfb_alakazam_with_level_31_mons_very/">link updated</a>
      </div>
    );

  }

}

export default MachampDynamicPunchList;
