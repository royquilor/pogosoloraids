import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon';
import Table from '../Table/Table';
import TableHeader from '../Table/TableHeader'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'
import Avatar from '../Avatar/Avatar'

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
      <div className="record-3 fadeIn">
        <HeadingMoveset
          type1="psychic"
          fastmove="Confusion"
          type2="ghost"
          chargemove="Shadow Ball">
          <Avatar
            text="youtube - pokecuno"
            href="https://www.reddit.com/r/TheSilphRoad/comments/79jple/just_soloed_cfb_alakazam_with_level_31_mons_very/"
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
          {AlakazamConfusionShadowBallList}
        </tbody>
        </Table>

      </div>
    );

  }

}

export default AlakazamConfusionShadowBallList;
