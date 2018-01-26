import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

class Omastar extends Component {

  render() {

    return (
      <BodyClassName className="omastar">
      <div className="pa3 pt4">
        <h2 className="f2 fw6 water">Omastar</h2>
        <OmastarHydroPumpList omastarhp={omastarhp} />
      </div>
      </BodyClassName>
    );

  }

}

export default Omastar;
