import React, { Component } from 'react'

import porygonzc from '../../data/porygon/porygonZapCannon'

import PorygonZapCannonList from './PorygonZapCannonList';

class Porygon extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Porygon</h2>
        <PorygonZapCannonList porygonzc={porygonzc} />
      </div>
    );

  }

}

export default Porygon;
