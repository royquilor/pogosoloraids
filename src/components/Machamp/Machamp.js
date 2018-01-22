import React, { Component } from 'react'

import machampcc from '../../data/machamp/machampCloseCombat'
import machampdp from '../../data/machamp/machampDynamicPunch'
import machamphs from '../../data/machamp/machampHeavySlam'

import MachampCloseCombatList from './MachampCloseCombatList';
import MachampDynamicPunchList from './MachampDynamicPunchList';
import MachampHeavySlamList from './MachampHeavySlamList';

class Machamp extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Machamp</h2>
        <MachampCloseCombatList machampcc={machampcc} />
        <MachampDynamicPunchList machampdp={machampdp} />
        <MachampHeavySlamList machamphs={machamphs} />
      </div>
    );

  }

}

export default Machamp;
