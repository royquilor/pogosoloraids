import React, { Component } from 'react'

import mvp from '../../data/mvp'
import fastest from '../../data/fastest'
import one from '../../data/one'

import MvpList from './MvpList';
import FastestList from './FastestList';
import OneList from './OneList';

class Home extends Component {

  render() {

    return (
      <div className="pa3">
        <MvpList mvp={mvp} />
        <FastestList fastest={fastest} />
        <OneList one={one} />
      </div>
    );

  }

}

export default Home;
