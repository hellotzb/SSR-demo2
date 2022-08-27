import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStoreInstance from './store';
import Routes from './routes';

const store = createStoreInstance(window?.__PRELOAD_STATE__);

console.log('client');
console.log(window?.__PRELOAD_STATE__);
console.log(store);
console.log(store.getState());

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
