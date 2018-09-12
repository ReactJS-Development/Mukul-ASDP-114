import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employee from './Employee';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Employee />, document.getElementById('root'));
registerServiceWorker();
