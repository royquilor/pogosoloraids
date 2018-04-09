import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import perfect from '../../data/home/perfect'

import PerfectList from './PerfectList';

import Wrap from '../Wrap/Wrap';

class Perfect extends Component {

  render() {

    return (
      <BodyClassName className="perfect-theme">
      <div>
        <header className="pa3-ns mw8 center cf pv3 pv6-ns">
          <h1 className="f4 f2-ns fw6 mt0 mb3 tc fadeIn">Perfect IV</h1>
        </header>
        <Wrap>
          <PerfectList perfect={perfect} />
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Perfect;
