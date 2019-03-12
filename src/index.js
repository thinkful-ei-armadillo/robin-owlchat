import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {participants, chatEvents} from './Store';
import '../src/styles.css';


ReactDOM.render(<App participants= {participants} chatEvents={chatEvents} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

