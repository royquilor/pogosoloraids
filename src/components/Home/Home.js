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
      <div className="pa3">
        <h2>Home</h2>
        <MvpList mvp={mvp} />
        <FastestList fastest={fastest} />
        <OneList one={one} />
      </div>
    );

  }

}

export default Home;
