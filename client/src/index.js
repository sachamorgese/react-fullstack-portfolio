// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import 'normalize.css';
import './index.scss';
import App from './components/App';
import createRootReducer from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import saga from './redux/sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  createRootReducer(history),
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware, historyMiddleware)),
);

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
