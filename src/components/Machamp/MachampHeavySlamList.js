import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class MachampHeavySlamList extends Component {

  render() {

    const { machamphs } = this.props;

    const MachampHeavySlamList = machamphs.map(pokemon => {
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
      <div className="record-3 fadeIn">
        <HeadingMoveset
          type1="steel"
          fastmove="Heavy Slam">
          <Avatar
            text="pokecuno"
            href="https://youtu.be/TDYX6hxON1M"
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
          {MachampHeavySlamList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default MachampHeavySlamList;
