import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import porygonzc from '../../data/porygon/porygonZapCannon'

import PorygonZapCannonList from './PorygonZapCannonList';

import Wrap from '../Wrap/Wrap';
import Header from '../Header/Header';

class Porygon extends Component {

  render() {

    return (
      <BodyClassName className="porygon">
      <div>
        <Header
          pokemon="Porygon"
          regularcp="895"
          weatherboostcp="1120"
          likes="Partly Cloudy"
          counters="Windy"
          />
        <Wrap>
          <PorygonZapCannonList porygonzc={porygonzc} />
        </Wrap>
      </div>
      </BodyClassName>
    );

  }

}

export default Porygon;
