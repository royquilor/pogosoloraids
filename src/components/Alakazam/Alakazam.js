import React, { Component } from 'react';
import BodyClassName from 'react-body-classname';

import alakazamcfb from '../../data/alakazam/alakazamConfusionFocusBlast';
import alakazamcfs from '../../data/alakazam/alakazamConfusionFutureSight';
import alakazamcsb from '../../data/alakazam/alakazamConfusionShadowBall';
import alakazampcfb from '../../data/alakazam/alakazamPsychoCutFocusBlast';
import alakazampcfs from '../../data/alakazam/alakazamPsychoCutFutureSight';
import alakazampcsb from '../../data/alakazam/alakazamPsychoCutShadowBall';

import AlakazamConfusionFocusBlastList from './AlakazamConfusionFocusBlastList';
import AlakazamConfusionFutureSightList from './AlakazamConfusionFutureSightList';
import AlakazamConfusionShadowBallList from './AlakazamConfusionShadowBallList';
import AlakazamPsychoCutFocusBlastList from './AlakazamPsychoCutFocusBlastList';
import AlakazamPsychoCutFutureSightList from './AlakazamPsychoCutFutureSightList';
import AlakazamPsychoCutShadowBallList from './AlakazamPsychoCutShadowBallList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Alakazam extends Component {

  render() {

    return (
      <BodyClassName className="raidboss alakazam">
        <div>
          <Header
            pokemon="Alakazam"
            type="psychic"
            regularcp="1649"
            weatherboostcp="2062"
            likes="Windy"
            />
          <Wrap>
          <AlakazamConfusionFocusBlastList alakazamcfb={alakazamcfb} />
          <AlakazamConfusionFutureSightList alakazamcfs={alakazamcfs} />
          <AlakazamConfusionShadowBallList alakazamcsb={alakazamcsb} />
          <AlakazamPsychoCutFocusBlastList alakazampcfb={alakazampcfb} />
          <AlakazamPsychoCutFutureSightList alakazampcfs={alakazampcfs} />
          <AlakazamPsychoCutShadowBallList alakazampcsb={alakazampcsb} />
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Alakazam;
