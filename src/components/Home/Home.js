import React, { Component } from 'react'

import mvp from '../../data/home/mvp'
import fastest from '../../data/home/fastest'
import one from '../../data/home/one'

import MvpList from './MvpList';
import FastestList from './FastestList';
import OneList from './OneList';

class Home extends Component {

  render() {

    return (
      <div className="pa3 black-70">
        <div className="w-100 cf mw9 tc-m">
          <div className="fl-l w-50-l">
            <h1 className="f4 fw6 f1-ns lh-title measure">Solo level 3 raids</h1>
            <p className="f5 f4-ns lh-copy measure mb5-ns dib-m">Pokemon go stuff gathered by a community. You don't have to spend all your stardust.</p>
          </div>
          <div className="fl-l w-50-l tl tc-ns pt5-l mb4">
            <a className="dib submit pv2 ph3 pv3-ns ph4-ns " href="">Submit a Raid</a>
          </div>
        </div>
        <MvpList mvp={mvp} />
        <FastestList fastest={fastest} />
        <OneList one={one} />
      </div>
    );

  }

}

export default Home;
