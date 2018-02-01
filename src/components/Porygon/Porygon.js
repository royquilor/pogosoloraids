import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import porygonzc from '../../data/porygon/porygonZapCannon'

import PorygonZapCannonList from './PorygonZapCannonList';

import Wrap from '../Wrap/Wrap';

class Porygon extends Component {

  render() {

    return (
      <BodyClassName className="porygon">
      <Wrap>
        <h2 className="f2 fw6 normal">Porygon</h2>
        <PorygonZapCannonList porygonzc={porygonzc} />
      </Wrap>
      </BodyClassName>
    );

  }

}

export default Porygon;
