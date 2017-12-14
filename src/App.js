import React, { Component } from 'react';
import Header from './components/Header/Header';
import SiteNav from './components/SiteNav/SiteNav';
import SubNav from './components/SubNav/SubNav';

import MvpPokemon from './components/MvpPokemon';
import FastestPokemon from './components/FastestPokemon';
import OnePokemon from './components/OnePokemon';
import Pokemon from './components/Pokemon';

import MvpList from './components/MvpList';
import FastestList from './components/FastestList';
import OneList from './components/OneList';

// import Routes from './routes';

import './App.css';

class App extends Component {

  constructor(props){
    super();
    this.state ={
      appName: 'soloed'
    }
  }

  render() {
    return (
      <div className="App">
        <Header tagline="Pokemon Go solo raid stuff"/>
        <SiteNav />
        <SubNav />
        <MvpList mvp={this.props.mvp} />
        <FastestList fastest={this.props.fastest} />
        <OneList one={this.props.one} />
    </div>
    );
  }
}

export default App;
