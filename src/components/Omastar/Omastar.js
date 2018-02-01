import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

import Wrap from '../Wrap/Wrap';

class Omastar extends Component {

  render() {

    return (
      <BodyClassName className="omastar">
      <Wrap>
        <h2 className="f2 fw6 water">Omastar</h2>
        <OmastarHydroPumpList omastarhp={omastarhp} />
      </Wrap>
      </BodyClassName>
    );

  }

}

export default Omastar;
