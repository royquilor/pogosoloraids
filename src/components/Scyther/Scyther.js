import React, { Component } from 'react'

import scytheraa from '../../data/scyther/scytherAerialAce'

import ScytherAerialAceList from './ScytherAerialAceList';

class Scyther extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Scyther</h2>
        <ScytherAerialAceList scytheraa={scytheraa} />
      </div>
    );

  }

}

export default Scyther;
