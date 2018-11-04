import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import 'normalize.css';
import './index.scss';
import App from './components/App';
import reducers from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import blogSaga from './redux/sagas/blogSagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(blogSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
