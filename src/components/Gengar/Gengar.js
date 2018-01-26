import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import gengarfb from '../../data/gengar/gengarFocusBlast'
import gengarsgb from '../../data/gengar/gengarSludgeBomb'
import gengarsb from '../../data/gengar/gengarShadowBall'

import GengarFocusBlastList from './GengarFocusBlastList';
import GengarSludgeBombList from './GengarSludgeBombList';
import GengarShadowBallList from './GengarShadowBallList';

class Gengar extends Component {

  render() {

    return (
      <BodyClassName className="gengar">
      <div className="pa3 pt4">
        <h2 className="f2 fw6 ghost">Gengar</h2>
        <GengarFocusBlastList gengarfb={gengarfb} />
        <GengarSludgeBombList gengarsgb={gengarsgb} />
        <GengarShadowBallList gengarsb={gengarsb} />
      </div>
      </BodyClassName>
    );

  }

}

export default Gengar;
