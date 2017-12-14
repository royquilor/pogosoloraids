import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import App from './App';
import Gengar from '././components/Gengar/Gengar';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Gengar} />
      <Route exact path='/gengar' component={Gengar} />
    </Switch>
  </BrowserRouter>

);

export default Routes;
