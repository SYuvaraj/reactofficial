import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import EventHandling from './components/eventHandling.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EventHandling />, document.getElementById('root'));
registerServiceWorker();
