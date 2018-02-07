import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

class GengarShadowBallList extends Component {

  render() {

    const { gengarsb } = this.props;

    const GengarShadowBallList = gengarsb.map(pokemon => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          moveset={pokemon.moveset}
          level={pokemon.level}
          iv={pokemon.iv}
          cp={pokemon.cp}
          classname={pokemon.classname}
          />
      )
    })

    return (
      <div>
        <HeadingMoveset
          type1="ghost"
          fastmove="Shadow Ball">
          <Avatar
            text="youtube"
            href="/"
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
          {GengarShadowBallList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default GengarShadowBallList;
