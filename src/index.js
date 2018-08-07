import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Root from './Root';
import modules from './modules';
import penderMiddleware from 'redux-pender';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';

const store = createStore(modules, applyMiddleware(penderMiddleware()));

const config = {
  apiKey: "AIzaSyCeLl26fWdo1aNtqsU3JPpyxFE4L9LQEmY",
  authDomain: "honghang-7ba3f.firebaseapp.com",
  databaseURL: "https://honghang-7ba3f.firebaseio.com",
  projectId: "honghang-7ba3f",
  storageBucket: "",
  messagingSenderId: "646058881599"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
