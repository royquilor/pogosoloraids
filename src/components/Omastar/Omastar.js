import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

class Omastar extends Component {

  render() {

    return (
      <BodyClassName className="omastar">
      <div className="pa3">
        <h2 className="water">Omastar</h2>
        <OmastarHydroPumpList omastarhp={omastarhp} />
      </div>
      </BodyClassName>
    );

  }

}

export default Omastar;
