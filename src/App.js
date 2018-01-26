import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import SiteNav from './components/SiteNav/SiteNav';
import SubNav from './components/SubNav/SubNav';

import Home from './components/Home/Home';
import Alakazam from './components/Alakazam/Alakazam';
import Gengar from './components/Gengar/Gengar';
import Machamp from './components/Machamp/Machamp';
import Ninetales from './components/Ninetales/Ninetales';
import Omastar from './components/Omastar/Omastar';
import Porygon from './components/Porygon/Porygon';
import Scyther from './components/Scyther/Scyther';

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
          <SiteNav />
          <Route exact path ='/' component={Home} />
          <Route exact path ='/alakazam' component={Alakazam} />
          <Route exact path ='/gengar' component={Gengar} />
          <Route exact path ='/machamp' component={Machamp} />
          <Route exact path ='/ninetales' component={Ninetales} />
          <Route exact path ='/omastar' component={Omastar} />
          <Route exact path ='/porygon' component={Porygon} />
          <Route exact path ='/scyther' component={Scyther} />
        </div>
      </Router>
    );
  }
}

export default App;
