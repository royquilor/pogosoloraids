import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class OmastarAncientPowerList extends Component {

  render() {

    const { omastarap } = this.props;

    const OmastarAncientPowerList = omastarap.map(pokemon => {
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
      <div>
        <HeadingMoveset
          type1="rock"
          fastmove="Ancient Power">
          <Avatar
            text="youtube"
            href="https://youtu.be/bZFBXEX4aDk"
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
          {OmastarAncientPowerList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default OmastarAncientPowerList;
