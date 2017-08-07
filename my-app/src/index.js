import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import EventHandling from './components/eventHandling.js';
import Greeting from './components/Greeting.js';
import LoginControl from './components/LoginControl.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginControl   />, document.getElementById('root'));
registerServiceWorker();
