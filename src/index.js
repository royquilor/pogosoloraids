import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tachyons.css';
import App from './App';
import mvp from './data/mvp'
import fastest from './data/fastest'
import one from './data/one'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App mvp={mvp} fastest={fastest} one={one}/>, document.getElementById('root'));
registerServiceWorker();
