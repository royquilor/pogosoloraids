import React, { Component } from 'react'
import Pokemon from '../Pokemon/Pokemon'
import Table from '../Table/Table'
import TableHeader from '../Table/TableHeader'
import Avatar from '../Avatar/Avatar'
import HeadingMoveset from '../HeadingMoveset/HeadingMoveset'

class AlakazamConfusionFocusBlastList extends Component {

  render() {

    const { alakazamcfb } = this.props;

    const AlakazamConfusionFocusBlastList = alakazamcfb.map(pokemon => {
      return (
        <Pokemon
          key={pokemon.id}
          iv={pokemon.iv}
          name={pokemon.name}
          level={pokemon.level}
          cp={pokemon.cp}
          moveset={pokemon.moveset}
          classname={pokemon.classname}
          />
      )
    })

    return (
      <div>
        <HeadingMoveset
          type1="psychic"
          fastmove="Confusion"
          type2="fighting"
          chargemove="Focus Blast"
          />
        <Table>
        <thead>
          <tr>
            <TableHeader>Pokemon</TableHeader>
            <TableHeader>IV</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>CP</TableHeader>
            <TableHeader>Moveset</TableHeader>
          </tr>
        </thead>
        <tbody>
          {AlakazamConfusionFocusBlastList}
        </tbody>
        </Table>
        <Avatar
          text="reddit source"
          href="https://www.reddit.com/r/TheSilphRoad/comments/79jple/just_soloed_cfb_alakazam_with_level_31_mons_very/"
          />
      </div>
    );

  }

}

export default AlakazamConfusionFocusBlastList;
