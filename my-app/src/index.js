import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import EventHandling from './components/eventHandling.js';
import Greeting from './components/Greeting.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Greeting  isLoggedIn = {false} />, document.getElementById('root'));
registerServiceWorker();
