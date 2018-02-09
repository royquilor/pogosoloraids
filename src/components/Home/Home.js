import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'

import mvp from '../../data/home/mvp'
import fastest from '../../data/home/fastest'
import one from '../../data/home/one'

import MvpList from './MvpList';
import FastestList from './FastestList';
import OneList from './OneList';

class Home extends Component {

  render() {

    return (
      <BodyClassName className="home">
      <div className="black-70">
        <div className="w-100 cf tc-m hero pv4 pa3 pv6-ns">
          <div className="mw7 center tl ">
            <div className="tl mb4-ns w-50-ns fl-ns">
              <h1 className="f2 fw6 f1-ns lh-solid mb3 mt0 ttu">Level 3 Solo Hall of Fame</h1>
            </div>
            <div className="tl mb4-ns w-50-ns fl-ns">
              <p className="f6 f5-ns lh-copy measure center db ">Pokemon go stuff gathered by a community. 6/7 raid bosses solo'd with level 30 pokemon without weather boost.</p>

            </div>
          </div>
        </div>
        <div className="pa3-ns mw8 center">
          <MvpList mvp={mvp} />
          <FastestList fastest={fastest} />
          <OneList one={one} />
        </div>
      </div>
      </BodyClassName>
    );

  }

}

export default Home;
