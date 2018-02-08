import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarhp from '../../data/omastar/omastarHydroPump'

import OmastarHydroPumpList from './OmastarHydroPumpList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Omastar extends Component {

  render() {

    return (
      <BodyClassName className="raidboss omastar">
      <div>
        <Header
          pokemon="Omastar"
          type="water"
          regularcp="1534"
          weatherboostcp="1918"
          likes="Partly Cloudy, Rainy"
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
