import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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

import Home from './components/Home';
import Gengar from './components/Gengar/Gengar';

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
      <Router>
        <div className="App">
          <Header tagline="Pokemon Go solo raid stuff"/>
          <SiteNav />
          <SubNav />
          <Route exact path ='/' component={Home} />
          <Route exact path ='/gengar' component={Gengar} />
        </div>
      </Router>
    );
  }
}

export default App;
