import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { searchRobots } from './reducers';
import './index.css';
import App from './containers/App';

import * as serviceWorker from './serviceWorker';
import 'tachyons';

/* 
Log only in development 
https://github.com/LogRocket/redux-logger#log-only-in-development
*/

const developmentLog = false;

const middlewares = [];
if (developmentLog && process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const store = createStore(searchRobots, applyMiddleware(...middlewares));

ReactDOM.render(
 <Provider store={store}>
  <App  />
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
