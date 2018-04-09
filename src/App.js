import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import SiteNav from './components/SiteNav/SiteNav';

import Home from './components/Home/Home';
import Alakazam from './components/Alakazam/Alakazam';
import Gengar from './components/Gengar/Gengar';
import Machamp from './components/Machamp/Machamp';
import Ninetales from './components/Ninetales/Ninetales';
import Omastar from './components/Omastar/Omastar';
import Porygon from './components/Porygon/Porygon';
import Scyther from './components/Scyther/Scyther';
import Perfect from './components/Perfect/Perfect';
import BlankState from './components/BlankState/BlankState';

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
        <div className="App pa1 pa2-ns">
          <main className="br2 pa3 pa5-ns fadeInUp">
            <SiteNav />
            <Route exact path ='/' component={Home} />
            <Route exact path ='/alakazam' component={Alakazam} />
            <Route exact path ='/gengar' component={Gengar} />
            <Route exact path ='/machamp' component={Machamp} />
            <Route exact path ='/perfect' component={Perfect} />
            <Route exact path ='/blank' component={BlankState} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
