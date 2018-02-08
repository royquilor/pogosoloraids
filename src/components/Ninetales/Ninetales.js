import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import ninetalesh from '../../data/ninetales/ninetalesHeatwave'
import ninetaleso from '../../data/ninetales/ninetalesOverheat'
import ninetaless from '../../data/ninetales/ninetalesSolarbeam'

import NinetalesHeatwaveList from './NinetalesHeatwaveList';
import NinetalesOverheatList from './NinetalesOverheatList';
import NinetalesSolarbeamList from './NinetalesSolarbeamList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Ninetales extends Component {

  render() {

    return (
      <BodyClassName className="raidboss ninetales">
        <div>
          <Header
            pokemon="Ninetales"
            type="fire"
            regularcp="1233"
            weatherboostcp="1541"
            likes="Clear/Sunny"
            />
          <Wrap>
            <NinetalesHeatwaveList ninetalesh={ninetalesh} />
            <NinetalesOverheatList ninetaleso={ninetaleso} />
            <NinetalesSolarbeamList ninetaless={ninetaless} />
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Ninetales;
