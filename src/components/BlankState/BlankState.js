import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import Wrap from '../Wrap/Wrap';

class BlankState extends Component {

  render() {

    return (
      <BodyClassName className="raidboss machamp">
        <div>
          <Wrap>
            This page needs some love
          </Wrap>
        </div>
      </BodyClassName>
    );

  }

}

export default BlankState;
