import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import porygonzc from '../../data/porygon/porygonZapCannon'

import PorygonZapCannonList from './PorygonZapCannonList';

class Porygon extends Component {

  render() {

    return (
      <BodyClassName className="porygon">
      <div className="pa3 pt4">
        <h2 className="f2 fw6 normal">Porygon</h2>
        <PorygonZapCannonList porygonzc={porygonzc} />
      </div>
      </BodyClassName>
    );

  }

}

export default Porygon;
