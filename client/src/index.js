// @flow
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import App from './components/App';
import createRootReducer from './redux/reducers';
import saga from './redux/sagas';
import authActions from './redux/reducers/auth/actions';
import './style/index.scss';

const { fetchUser } = authActions;

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

store.dispatch(fetchUser());

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    root,
  );
}
