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
        <div className="w-100 cf tc-m hero white pt4 pa3">
          <div className="mw9 center tl tc-ns ">
            <div className="tl tc-ns">
              <h1 className="f4 fw6 f1-ns lh-title mb3">Solo level 3 raids</h1>
              <p className="f5 f5-ns lh-copy measure center mb4 db">Pokemon go stuff gathered by a community. <br/>You don't have to spend all your stardust.</p>
            </div>
            <div className="tl tc-ns mb4">
              <a className="dib submit pv2 ph3 pv3-ns ph4-ns " href="">Submit a Raid</a>
            </div>
          </div>
        </div>
        <div className="pa3">
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
