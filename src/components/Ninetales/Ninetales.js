import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import ninetalesh from '../../data/ninetales/ninetalesHeatwave'

import NinetalesHeatwaveList from './NinetalesHeatwaveList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Ninetales extends Component {

  render() {

    return (
      <BodyClassName className="ninetales">
        <div>
          <Header
            pokemon="Ninetales"
            regularcp="1233"
            weatherboostcp="1541"
            />
          <Wrap>
            <NinetalesHeatwaveList ninetalesh={ninetalesh} />
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Ninetales;
