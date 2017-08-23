import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import EventHandling from './components/eventHandling.js';
import Greeting from './components/Greeting.js';
import LoginControl from './components/LoginControl.js';
import MailBox from './components/Mailbox.js';
import Page from './components/Page.js';
import ListKeys from './components/ListKeys.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<ListKeys  />, document.getElementById('root'));
registerServiceWorker();
