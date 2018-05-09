import React, { Component } from 'react'

import gengarfb from '../../data/gengar/gengarFocusBlast'
import gengarsgb from '../../data/gengar/gengarSludgeBomb'
import gengarsb from '../../data/gengar/gengarShadowBall'

import GengarFocusBlastList from './GengarFocusBlastList';
import GengarSludgeBombList from './GengarSludgeBombList';
import GengarShadowBallList from './GengarShadowBallList';

class GengarCloudyTable extends Component {

  render() {

    return (
      <div>
      <h2>Cloudy</h2>
        <GengarFocusBlastList gengarfb={gengarfb} />
        <GengarSludgeBombList gengarsgb={gengarsgb} />
        <GengarShadowBallList gengarsb={gengarsb} />
      </div>
    );

  }

}

export default GengarCloudyTable;
