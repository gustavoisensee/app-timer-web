import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/routes';
import * as serviceWorker from './serviceWorker';
import { init as initSentry } from './helpers/sentry';
import './index.scss';

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Initialize its own setups
initSentry();
