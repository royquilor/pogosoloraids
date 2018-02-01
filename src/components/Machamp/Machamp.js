import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import machampcc from '../../data/machamp/machampCloseCombat'
import machampdp from '../../data/machamp/machampDynamicPunch'
import machamphs from '../../data/machamp/machampHeavySlam'

import MachampCloseCombatList from './MachampCloseCombatList';
import MachampDynamicPunchList from './MachampDynamicPunchList';
import MachampHeavySlamList from './MachampHeavySlamList';

import Wrap from '../Wrap/Wrap';

class Machamp extends Component {

  render() {

    return (
      <BodyClassName className="machamp">
        <Wrap>
          <h2 className="f2 fw6 fighting">Machamp</h2>
          <MachampCloseCombatList machampcc={machampcc} />
          <MachampDynamicPunchList machampdp={machampdp} />
          <MachampHeavySlamList machamphs={machamphs} />
        </Wrap>
      </BodyClassName>
    );

  }

}

export default Machamp;
