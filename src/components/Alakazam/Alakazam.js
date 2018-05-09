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
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class Alakazam extends Component {

  render() {

    return (
      <BodyClassName className="raidboss psychic-type-theme">
        <div>
          <Header
            pokemon="Alakazam"
            type="psychic"
            regularcp="1649"
            weatherboostcp="2062"
            likes="Windy"
            />
          <Wrap>
          <nav class="pb4 pt2 tc">
          <Router>
            <Switch>
              <Router path="/" component
            </Switch>
          </Router>
  <div class="tabs mb4 ttu dib">
    <a class="link dib mr3 pv3 ph4 ma0" href="#" title="Link 1">Extreme</a>
    <a class="link dib mr3 pv3 ph4 ma0" href="#" title="Link 1">Windy</a>
  </div>
</nav>
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
