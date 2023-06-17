import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store/configureStore';
import { verifyToken } from './services/tokenService';
import App from './containers/app/AppContainer';
import './scss/app.scss';

const mountNode = document.getElementById('root');

// Used to log in if token is valid
store.dispatch(verifyToken() as any);

ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
  </Suspense>,
  mountNode
);
