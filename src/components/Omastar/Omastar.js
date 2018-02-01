import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Omastar extends Component {

  render() {

    return (
      <BodyClassName className="omastar">
      <div>
        <Header
          pokemon="Omastar"
          regularcp="1534"
          weatherboostcp="1918"
          />
        <Wrap>
          <OmastarHydroPumpList omastarhp={omastarhp} />
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Omastar;
