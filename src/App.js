import React, { Component } from 'react';
import Header from './components/Header';
import MvpPokemon from './components/MvpPokemon';
import FastestPokemon from './components/FastestPokemon';
import MvpList from './components/MvpList';
import FastestList from './components/FastestList';
import OnePokemon from './components/OnePokemon';
import OneList from './components/OneList';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header tagline="Pokemon Go solo raid stuff"/>
        <MvpList mvp={this.props.mvp} />
        <FastestList fastest={this.props.fastest} />
        <OneList one={this.props.one} />
      </div>
    );
  }
}

export default App;
