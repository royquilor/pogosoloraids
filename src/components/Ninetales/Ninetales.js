import React, { Component } from 'react'

import ninetalesh from '../../data/ninetales/ninetalesHeatwave'

import NinetalesHeatwaveList from './NinetalesHeatwaveList';

class Ninetales extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Ninetales</h2>
        <NinetalesHeatwaveList ninetalesh={ninetalesh} />
      </div>
    );

  }

}

export default Ninetales;
