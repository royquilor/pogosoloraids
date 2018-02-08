import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import omastarap from '../../data/omastar/omastarAncientPower'
import omastarhp from '../../data/omastar/omastarHydroPump'
import omastarrb from '../../data/omastar/omastarRockBlast'

import OmastarAncientPowerList from './OmastarAncientPowerList';
import OmastarHydroPumpList from './OmastarHydroPumpList';
import OmastarRockBlastList from './OmastarRockBlastList';

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
          <OmastarAncientPowerList omastarap={omastarap} />
          <OmastarHydroPumpList omastarhp={omastarhp} />
          <OmastarRockBlastList omastarrb={omastarrb} />
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Omastar;
