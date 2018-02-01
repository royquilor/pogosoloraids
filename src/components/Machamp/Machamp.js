import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import machampcc from '../../data/machamp/machampCloseCombat'
import machampdp from '../../data/machamp/machampDynamicPunch'
import machamphs from '../../data/machamp/machampHeavySlam'

import MachampCloseCombatList from './MachampCloseCombatList';
import MachampDynamicPunchList from './MachampDynamicPunchList';
import MachampHeavySlamList from './MachampHeavySlamList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Machamp extends Component {

  render() {

    return (
      <BodyClassName className="machamp">
        <div>
          <Header
            pokemon="Machamp"
            regularcp="1650"
            weatherboostcp="2063"
            />
          <Wrap>
            <MachampCloseCombatList machampcc={machampcc} />
            <MachampDynamicPunchList machampdp={machampdp} />
            <MachampHeavySlamList machamphs={machamphs} />
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default Machamp;
