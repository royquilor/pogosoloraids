import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import scytheraa from '../../data/scyther/scytherAerialAce'

import ScytherAerialAceList from './ScytherAerialAceList';

class Scyther extends Component {

  render() {

    return (
      <BodyClassName className="scyther">
      <div className="pa3 pt4">
        <h2 className="f2 fw6 bug">Scyther</h2>
        <ScytherAerialAceList scytheraa={scytheraa} />
      </div>
      </BodyClassName>
    );

  }

}

export default Scyther;
