import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import Wrap from '../Wrap/Wrap';

class BlankState extends Component {

  render() {

    return (
      <BodyClassName className="blank-theme">
        <div>
          <Wrap>
            <header className="pa3-ns mw8 center cf pv3 pv6-ns" data-name="slab-stat">
              <h1 className="f4 f2-ns fw6 mt0 mb3 tc fadeIn">
                This page needs some love
              </h1>
            </header>
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default BlankState;
