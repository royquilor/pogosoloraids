import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class MachampDynamicPunchList extends Component {

  render() {

    const { machampdp } = this.props;

    const MachampDynamicPunchList = machampdp.map(pokemon => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          moveset={pokemon.moveset}
          iv={pokemon.iv}
          level={pokemon.level}
          cp={pokemon.cp}
          classname={pokemon.classname}
          />
      )
    })

    return (
      <div className="record-2 fadeIn">
        <HeadingMoveset
          type1="fighting"
          fastmove="Dynamic Punch">
          <Avatar
            text="pokecuno"
            href="https://youtu.be/WfHR-t-Hj6M"
            />
        </HeadingMoveset>
        <Table>
        <thead>
          <tr>
            <TableHeader>&nbsp;</TableHeader>
            <TableHeader>Moveset</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>CP</TableHeader>
          </tr>
        </thead>
        <tbody>
          {MachampDynamicPunchList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default MachampDynamicPunchList;
