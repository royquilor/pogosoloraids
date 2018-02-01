import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import scytheraa from '../../data/scyther/scytherAerialAce'

import ScytherAerialAceList from './ScytherAerialAceList';

import Wrap from '../Wrap/Wrap';

class Scyther extends Component {

  render() {

    return (
      <BodyClassName className="scyther">
      <Wrap>
        <h2 className="f2 fw6 bug">Scyther</h2>
        <ScytherAerialAceList scytheraa={scytheraa} />
      </Wrap>
      </BodyClassName>
    );

  }

}

export default Scyther;
