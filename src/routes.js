import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import App from './App';
import Gengar from '././components/Gengar/Gengar';

const Routes = () => (
  <BrowserRouter basename="/p">
    <Switch>
      <Route exact path='/' exactly component={Home} />
      <Route exact path='/gengar' component={Gengar} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
