import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import scytheraa from '../../data/scyther/scytherAerialAce'

import ScytherAerialAceList from './ScytherAerialAceList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Scyther extends Component {

  render() {

    return (
      <BodyClassName className="scyther">
        <div>
          <Header
            pokemon="Scyther"
            regularcp="1408"
            weatherboostcp="1760"
            likes="Rainy, Windy"
            counters="Partly Cloudy, Clear/Sunny"
            />
          <Wrap>
            <ScytherAerialAceList scytheraa={scytheraa} />
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Scyther;
