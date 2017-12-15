import React, { Component } from 'react'
import mvp from '../../data/mvp'
import fastest from '../../data/fastest'
import one from '../../data/one'

import MvpPokemon from '../../components/MvpPokemon';
import FastestPokemon from '../../components/FastestPokemon';
import OnePokemon from '../../components/OnePokemon';
import Pokemon from '../../components/Pokemon';

import MvpList from '../../components/MvpList';
import FastestList from '../../components/FastestList';
import OneList from '../../components/OneList';



class Home extends Component {

  render() {

    return (
      <div className="pa3">
        <h2>Home</h2>
      </div>
    );

  }

}

export default Home;
