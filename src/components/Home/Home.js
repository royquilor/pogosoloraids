import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import mvp from '../../data/home/mvp'
import fastest from '../../data/home/fastest'
import one from '../../data/home/one'
import duo from '../../data/home/duo'
import trio from '../../data/home/trio'

import MvpList from './MvpList';
import FastestList from './FastestList';
import OneList from './OneList';
import DuoList from './DuoList';
import TrioList from './TrioList';


class Home extends Component {

  render() {

    return (
      <BodyClassName className="home-theme">
      <div className="black-70">
        <div className="w-100 cf tc-m hero pv4 pa3 pt6-ns ">
          <div className="mw7 center tl ">
            <div className="tc mb4-ns xw-50-ns xfl-ns">
              <h1 className="f2 fw6 f1-ns lh-solid mb3 mt0 ttu fadeIn">Pokemon go unoffical record keeper</h1>
            </div>
            <div className="tc mb4-ns xw-50-ns xfl-ns">
              <p className="f6 f5-ns lh-copy measure center db fadeIn">Pokemon go stuff gathered by a community. Raid bosses solod with level 30 pokemon without weather boost.</p>
            </div>
          </div>
        </div>
        <div className="pa3-ns mw8 center">
          <MvpList mvp={mvp} />
          <h3>Latios</h3>
          <p className="tc">Minimum 5 level 30 trainers with correct counters</p>
          <DuoList duo={duo} />
          <TrioList trio={trio} />
          {/*
            <FastestList fastest={fastest} />
            <OneList one={one} />
          */}
        </div>
      </div>
      </BodyClassName>
    );

  }

}

export default Home;
