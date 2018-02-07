import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import gengarfb from '../../data/gengar/gengarFocusBlast'
import gengarsgb from '../../data/gengar/gengarSludgeBomb'
import gengarsb from '../../data/gengar/gengarShadowBall'

import GengarFocusBlastList from './GengarFocusBlastList';
import GengarSludgeBombList from './GengarSludgeBombList';
import GengarShadowBallList from './GengarShadowBallList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Gengar extends Component {

  render() {

    return (
      <BodyClassName className="gengar">
      <div>
        <Header
          pokemon="Gengar"
          type="ghost"
          regularcp="1496"
          weatherboostcp="1870"
          likes="Cloudy, Foggy"
          />
        <Wrap>
          <GengarFocusBlastList gengarfb={gengarfb} />
          <GengarSludgeBombList gengarsgb={gengarsgb} />
          <GengarShadowBallList gengarsb={gengarsb} />
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Gengar;
