import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import machampcc from '../../data/machamp/machampCloseCombat'
import machampdp from '../../data/machamp/machampDynamicPunch'
import machamphs from '../../data/machamp/machampHeavySlam'

import MachampCloseCombatList from './MachampCloseCombatList';
import MachampDynamicPunchList from './MachampDynamicPunchList';
import MachampHeavySlamList from './MachampHeavySlamList';

class Machamp extends Component {

  render() {

    return (
      <BodyClassName className="machamp">
        <div className="pa3 pt4">
          <h2 className="f2 fw6 fighting">Machamp</h2>
          <MachampCloseCombatList machampcc={machampcc} />
          <MachampDynamicPunchList machampdp={machampdp} />
          <MachampHeavySlamList machamphs={machamphs} />
        </div>
      </BodyClassName>
    );

  }

}

export default Machamp;
