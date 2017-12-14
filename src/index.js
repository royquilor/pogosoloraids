import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tachyons.css';
import App from './App';

import mvp from './data/mvp'
import fastest from './data/fastest'
import one from './data/one'
import gengarfb from './data/gengar/gengarFocusBlast'
import gengarsgb from './data/gengar/gengarSludgeBomb'
import gengarsb from './data/gengar/gengarShadowBall'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    mvp={mvp}
    fastest={fastest}
    one={one}
    gengarfb={gengarfb}
    gengarsgb={gengarsgb}
    gengarsb={gengarsb}
    />,
  document.getElementById('root'));
registerServiceWorker();
