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
        <div className="w-100 cf">
          <div className="fl w-50">
            <h1 className="f4 fw6 f1-ns lh-title measure">Solo level 3 raids</h1>
            <p className="f5 f4-ns lh-copy measure mb5 db">Pokemon go lists gathered by a community. You don't have to spend all your stardust.</p>
          </div>
          <div className="fl w-50 tc pt5">
            <a className="dib submit" href="">Submit a Raid</a>
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
