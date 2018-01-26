import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import ninetalesh from '../../data/ninetales/ninetalesHeatwave'

import NinetalesHeatwaveList from './NinetalesHeatwaveList';

class Ninetales extends Component {

  render() {

    return (
      <BodyClassName className="ninetales">
        <div className="pa3 pt4">
          <h2 className="f2 fw6 fire">Ninetales</h2>
          <NinetalesHeatwaveList ninetalesh={ninetalesh} />
        </div>
      </BodyClassName>
    );

  }

}

export default Ninetales;
