import React, { Component } from 'react'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

class Omastar extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Omastar</h2>
        <OmastarHydroPumpList omastarhp={omastarhp} />
      </div>
    );

  }

}

export default Omastar;
