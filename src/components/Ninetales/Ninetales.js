import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import ninetalesh from '../../data/ninetales/ninetalesHeatwave'

import NinetalesHeatwaveList from './NinetalesHeatwaveList';

import Wrap from '../Wrap/Wrap';

class Ninetales extends Component {

  render() {

    return (
      <BodyClassName className="ninetales">
        <Wrap>
          <h2 className="f2 fw6 fire">Ninetales</h2>
          <NinetalesHeatwaveList ninetalesh={ninetalesh} />
        </Wrap>
      </BodyClassName>
    );

  }

}

export default Ninetales;
