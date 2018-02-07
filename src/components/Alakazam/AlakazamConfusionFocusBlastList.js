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
          type1="psychic"
          fastmove="Confusion"
          type2="fighting"
          chargemove="Focus Blast">
          <Avatar
            text="reddit source"
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
          {AlakazamConfusionFocusBlastList}
        </tbody>
        </Table>
      </div>
    );

  }

}

export default AlakazamConfusionFocusBlastList;
