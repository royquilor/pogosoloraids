import React, { Component } from 'react';
import Header from './components/Header';
import SiteNav from './components/SiteNav';
import MvpPokemon from './components/MvpPokemon';
import FastestPokemon from './components/FastestPokemon';
import MvpList from './components/MvpList';
import FastestList from './components/FastestList';
import OnePokemon from './components/OnePokemon';
import OneList from './components/OneList';
import GengarList from './components/GengarList';
import Pokemon from './components/Pokemon';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header tagline="Pokemon Go solo raid stuff"/>
        <SiteNav />
        <MvpList mvp={this.props.mvp} />
        <FastestList fastest={this.props.fastest} />
        <OneList one={this.props.one} />
        <GengarList gengar={this.props.gengar} />
      </div>
    );
  }
}

export default App;
